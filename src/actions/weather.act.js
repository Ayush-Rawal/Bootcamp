export const REFRESH = 'REFRESH';
export const CHANGECITY = 'CHANGECITY';
export const CHANGESTATUS = 'CHANGESTATUS'
export const UPDATED = 'UPDATED'

export function refresh() {
    return {
        type: REFRESH
    }
}

export function updated() {
    return {
        type: UPDATED
    }
}

export function changeCity(city) {
    return {
        type: CHANGECITY,
        city
    }
}

export function changeStatus(status) {
    return {
        type: CHANGESTATUS,
        status
    }
}