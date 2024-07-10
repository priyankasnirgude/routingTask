

export interface Iproduct{
    pname : string,
    pstatus : Ipstatus,
    canreturn : 0 | 1,
    pId : string,
    pimg : string
}


export type Ipstatus = 'In-Progress' | 'Dispathced' | 'Delivered';