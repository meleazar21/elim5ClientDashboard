import {GetResponseBody, baseUrlApi } from '../request/requestConfig';

/**
 * function for insert username log
 * @param {any} username username to log
 * @author Eleazar Martinez
 */
export const InsertUserLogRequest = async (username) => {
    const result = await fetch(`${baseUrlApi}api/UserLog/SaveUser?username=${username}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    return await GetResponseBody(result);
}

/**
 * function for Get Metrics
 * @param {any} username username to log
 * @author Eleazar Martinez
 */
export const GetMetricsRequest = async (username) => {
    const result = await fetch(`${baseUrlApi}api/UserLog/GetMetrics`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    return await GetResponseBody(result);
}