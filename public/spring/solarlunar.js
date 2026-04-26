/*
 * solarlunar.js
 * 浏览器版：使用内置农历数据表与算法（基于你提供的实现），并暴露到 window.solarlunar
 * 提供：solarToLunar(year, month, day) 和 lunar2solar(year, month, day, isLeap)
 * 以及便捷的 getSpringFestivalDate(year) 返回 "YYYY-MM-DD"
 */

// 农历数据表（1900-2100）
const lunarInfo = new Array(
    0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2,
    0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977,
    0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970,
    0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950,
    0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557,
    0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5d0, 0x14573, 0x052d0, 0x0a9a8, 0x0e950, 0x06aa0,
    0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0,
    0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b5a0, 0x195a6,
    0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570,
    0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0,
    0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5,
    0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930,
    0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530,
    0x05aa0, 0x076a3, 0x096d0, 0x04bd7, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45,
    0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0,
    0x14b63, 0x09370, 0x049f8, 0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06b20, 0x1a6c4, 0x0aae0,
    0x0a2e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0, 0x0da50, 0x05d55, 0x056a0, 0x0a6d0, 0x055d4,
    0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0, 0x052b0,
    0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160,
    0x0e968, 0x0d520, 0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4, 0x0a2d0, 0x0d150, 0x0f252,
    0x0d520
);

const minYear = 1900; // 能计算的最小年份
const maxYear = 2100; // 能计算的最大年份

// 阳历每月天数，遇到闰年2月需加1天
const solarMonth = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

// 农历月份别称
const monthName = new Array('正月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '冬月', '腊月');

// 二十四节气
const solarTerm = new Array(
    '小寒', '大寒', '立春', '雨水', '惊蛰', '春分',
    '清明', '谷雨', '立夏', '小满', '芒种', '夏至',
    '小暑', '大暑', '立秋', '处暑', '白露', '秋分',
    '寒露', '霜降', '立冬', '小雪', '大雪', '冬至'
);

// 二十节气相关系数
const termInfo = new Array(
    0, 21208, 42467, 63836, 85337, 107014,
    128867, 150921, 173149, 195551, 218072, 240693,
    263343, 285989, 308563, 331033, 353350, 375494,
    397447, 419210, 440795, 462224, 483532, 504758);

function _checkYear(year) {
    if (year < minYear) throw new RangeError('年份不能小于' + minYear + '年');
    if (year > maxYear) throw new RangeError('年份不能大于' + maxYear + '年');
    return true;
}

function _checkMonth(month) {
    if (month < 1) throw new RangeError('月份不能小于1');
    if (month > 12) throw new RangeError('月份不能大于12');
    return true;
}

function _checkDay(day) {
    if (day < 1) throw new RangeError('日期不能小于1');
    if (day > 31) throw new RangeError('日期不能大于31');
    return true;
}

function getLunarLeapMonth(year) {
    if (_checkYear(year)) return lunarInfo[year - minYear] & 0xf;
}

function getLeapMonthDaysCount(year) {
    if (getLunarLeapMonth(year)) return lunarInfo[year - minYear] & 0x10000 ? 30 : 29;
    return 0;
}

function getLunarYearDaysCount(year) {
    if (_checkYear(year)) {
        let sum = 348;
        for (let i = 0x8000; i > 0x8; i >>= 1) sum += (lunarInfo[year - minYear] & i ? 1 : 0);
        return sum + getLeapMonthDaysCount(year);
    }
}

function getLunarYearMonthDaysCount(year, month) {
    if (_checkYear(year) && _checkMonth(month)) return lunarInfo[year - minYear] & (0x10000 >> month) ? 30 : 29;
}

function getLunarDayString(day) {
    if (_checkDay(day)) {
        const nStr1 = new Array('日', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十');
        const nStr2 = new Array('初', '十', '廿', '卅');
        let str = '';
        switch (day) {
            case 10: str = '初十'; break;
            case 20: str = '二十'; break;
            case 30: str = '三十'; break;
            default:
                str = nStr2[Math.floor(day / 10)];
                str += nStr1[day % 10];
                break;
        }
        return str;
    }
}

function getLunarTermDay(year, n) {
    if (_checkYear(year) && n <= 23 && n >= 0) {
        const sTermInfo = new Array(0, 21208, 42467, 63836, 85337, 107014, 128867, 150921, 173149, 195551, 218072, 240693, 263343, 285989, 308563, 331033, 353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758);
        const offDate = new Date((31556925974.7 * (year - minYear) + sTermInfo[n] * 60000) + Date.UTC(minYear, 0, 6, 2, 5));
        return offDate.getUTCDate();
    }
}

function solarToLunar(year, month, day) {
    if (_checkYear(year) && _checkMonth(month) && _checkDay(day)) {
        // Use UTC to avoid timezone/local midnight issues that cause off-by-one days
        const baseUtc = Date.UTC(minYear, 0, 31);
        const objUtc = Date.UTC(year, month - 1, day);
        let offset = Math.floor((objUtc - baseUtc) / 86400000);
        let temp = 0;
        let i = 0;

        for (i = minYear; i < maxYear && offset > 0; i++) {
            temp = getLunarYearDaysCount(i);
            if (offset < temp) break; else offset -= temp;
        }

        const lunarYear = i;
        const leap = getLunarLeapMonth(lunarYear);
        let isLeapMonth = false;
        for (i = 1; i <= 12 && offset > 0; i++) {
            if (leap > 0 && i == (leap + 1) && !isLeapMonth) {
                --i;
                isLeapMonth = true;
                temp = getLeapMonthDaysCount(lunarYear);
            } else {
                isLeapMonth = false;
                temp = getLunarYearMonthDaysCount(lunarYear, i);
            }

            if (offset < temp) break; else offset -= temp;
        }
        const lunarMonth = i;
        const lunarDay = offset + 1;

        let monthStr = '';
        if (isLeapMonth) monthStr = '闰' + monthName[lunarMonth - 1]; else monthStr = monthName[lunarMonth - 1];

        return {
            year: lunarYear,
            month: lunarMonth,
            day: lunarDay,
            isLeap: isLeapMonth,
            monthStr: monthStr,
            dayStr: getLunarDayString(lunarDay)
        };
    }
}

function getSolarMonthDaysCount(year, month) {
    if (_checkYear(year) && _checkMonth(month)) {
        if (month == 2) return (((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) ? 29 : 28);
        else return solarMonth[month - 1];
    }
}

function getSolarDayNumber(year, month, day) {
    if (_checkYear(year) && _checkMonth(month) && _checkDay(day)) {
        const date = new Date(year, month - 1, day);
        const d = date.getDate();
        const m = month - 1;
        let sum = d;
        for (let i = 0; i < m; i++) sum += solarMonth[i];
        if (m > 1 && ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)) sum += 1;
        return sum;
    }
}

function getLunar24Days(year, month, day) {
    if (_checkYear(year) && _checkMonth(month) && _checkDay(day)) {
        // 使用已有的 getLunarTermDay 来判断节气，避免索引/时区偏移问题
        for (let n = 0; n < 24; n++) {
            const termMonth = Math.floor(n / 2) + 1; // 每两项归属同一个月份
            const termDay = getLunarTermDay(year, n);
            if (termMonth === month && termDay === day) return solarTerm[n];
        }
        return false;
    }
}

// 返回指定日期的二十四节气名称（若无则返回 null）
function getSolarTerm(year, month, day) {
    try { _checkYear(year); _checkMonth(month); _checkDay(day); } catch (e) { return null; }
    for (let n = 0; n < 24; n++) {
        const termMonth = Math.floor(n / 2) + 1;
        const termDay = getLunarTermDay(year, n);
        if (termMonth === month && termDay === day) return solarTerm[n];
    }
    return null;
}

// 计算并返回给定公历日对应的节日列表（含公历节日、农历节日和节气相关节日）
function getFestivals(year, month, day) {
    try { _checkYear(year); _checkMonth(month); _checkDay(day); } catch (e) { return []; }
    const results = [];

    // 常见公历节日
    if (month === 1 && day === 1) results.push('元旦');
    if (month === 2 && day === 14) results.push('情人节');
    if (month === 5 && day === 1) results.push('劳动节');
    if (month === 10 && day === 1) results.push('国庆节');
    if (month === 12 && day === 25) results.push('圣诞节');

    // 节气相关：清明通常作为清明节
    const term = getSolarTerm(year, month, day);
    if (term) {
        if (term === '清明') results.push('清明节');
        results.push(term);
    }

    // 农历节日
    const lun = solarToLunar(year, month, day);
    if (lun) {
        // 除夕：农历腊月最后一天
        if (lun.month === 12) {
            const lastDay = getLunarYearMonthDaysCount(lun.year, 12);
            if (lun.day === lastDay) results.push('除夕');
        }
        if (lun.month === 1 && lun.day === 1) results.push('春节');
        if (lun.month === 1 && lun.day === 15) results.push('元宵节');
        if (lun.month === 5 && lun.day === 5) results.push('端午节');
        if (lun.month === 7 && lun.day === 7) results.push('七夕节');
        if (lun.month === 8 && lun.day === 15) results.push('中秋节');
        if (lun.month === 9 && lun.day === 9) results.push('重阳节');
        if (lun.month === 12 && lun.day === 8) results.push('腊八节');
    }

    return results;
}

// 暴露到全局对象
window.solarlunar = window.solarlunar || {};
window.solarlunar.getLunarLeapMonth = getLunarLeapMonth;
window.solarlunar.getLeapMonthDaysCount = getLeapMonthDaysCount;
window.solarlunar.getLunarYearDaysCount = getLunarYearDaysCount;
window.solarlunar.getLunarYearMonthDaysCount = getLunarYearMonthDaysCount;
window.solarlunar.getLunarDayString = getLunarDayString;
window.solarlunar.getLunarTermDay = getLunarTermDay;
window.solarlunar.getSolarMonthDaysCount = getSolarMonthDaysCount;
window.solarlunar.getSolarDayNumber = getSolarDayNumber;
window.solarlunar.getLunar24Days = getLunar24Days;
window.solarlunar.solarToLunar = solarToLunar;
window.solarlunar.getSolarTerm = getSolarTerm;
window.solarlunar.getFestivals = getFestivals;

// 简单的 lunar2solar：在范围内搜索匹配的公历日期（用于获取正月初一等）
window.solarlunar.lunar2solar = function (ly, lm, ld, isLeap) {
    try { _checkYear(ly); } catch (e) { return null; }
    // 搜索范围：上一年12月1日到当年12月31日
    const start = new Date(ly - 1, 11, 1);
    const end = new Date(ly, 11, 31);
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
        const sY = d.getFullYear();
        const sM = d.getMonth() + 1;
        const sD = d.getDate();
        const lun = solarToLunar(sY, sM, sD);
        if (!lun) continue;
        if (lun.year === ly && lun.month === lm && lun.day === ld && (!!lun.isLeap === !!isLeap)) {
            return { year: sY, month: sM, day: sD };
        }
    }
    return null;
};

window.getSpringFestivalDate = function (year) {
    const d = window.solarlunar.lunar2solar(year, 1, 1, false);
    if (d) return `${d.year}-${String(d.month).padStart(2, '0')}-${String(d.day).padStart(2, '0')}`;
    return null;
};
