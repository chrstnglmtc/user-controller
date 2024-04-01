export interface User {
    emp_id: string;
    username: string;
    password: string;
    position_id: string;
    dept_id: string;
    section_id: string;
    status_code: string;
    img_src: string;
}

export interface UserDetails {
    pid: string;
    emp_id: string;
    fname: string;
    lname: string;
    mname: string;
    email: string;
    del_flag: string;
}