import { domain } from './Domain'

export interface Job
{
    domain: domain,
    name : string,
    hours : number,
    location : string,
    requrememts : string,
    workFromHome : boolean
}
