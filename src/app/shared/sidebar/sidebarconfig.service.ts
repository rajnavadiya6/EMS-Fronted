import { Injectable } from '@angular/core';
import { RouteInfo } from './sidebar.metadata';
import { AuthService } from '../auth/auth.service'

@Injectable({
  providedIn: 'root'
})
export class SidebarconfigService {
  ROUTES: RouteInfo[] = [];
  constructor(private AuthService: AuthService) { }

  GetRouteinfo() {
    const role = this.AuthService.getRole();
    if (role === "Admin") {
      return [
        { path: '/Admin/dashbord', title: 'Dashboard', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Admin/mstudent', title: 'Manage Student', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Admin/mfaculty', title: 'Manage Faculty', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Admin/mcourse', title: 'Manage Course', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Admin/mstandard', title: 'Manage Standard', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Admin/mdivision', title: 'Manage Divison', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Admin/msubject', title: 'Manage Subject', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Admin/noticeboard', title: 'Manage Notice Board', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Admin/mevent', title: 'Manage Event', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Admin/meventImg', title: 'Manage Event Image', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Admin/mtimetable', title: 'Manage Time-Table', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },

      ]
    } else if (role === "Faculty") {
      return [

        // { path: '/adminregister', title: 'Admin Registratiobn', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        // { path: '/adminlogin', title: 'Admin Login', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Faculty/dashbord', title: 'Dashboard', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Faculty/mstudent', title: 'Manage Student', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Faculty/mcourse', title: 'Manage Course', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Faculty/mstandard', title: 'Manage Standard', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        // { path: '/mdivision', title: 'Manage Divison', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        // { path: '/msubject', title: 'Manage Subject', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        // { path: '/noticeboard', title: 'Manage Notice Board', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Faculty/mevent', title: 'Manage Event', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Faculty/meventImg', title: 'Manage Event Image', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Faculty/mtimetable', title: 'Manage Time-Table', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },

      ]
    } else if (role === "Student") {
      return [

        // { path: '/adminregister', title: 'Admin Registratiobn', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        // { path: '/adminlogin', title: 'Admin Login', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Student/dashbord', title: 'Dashboard', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Student/mstudent', title: 'Manage Student', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        // { path: '/mcourse', title: 'Manage Course', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Student/mstandard', title: 'Manage Standard', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Student/mdivision', title: 'Manage Divison', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        // { path: '/msubject', title: 'Manage Subject', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Student/noticeboard', title: 'Manage Notice Board', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Student/mevent', title: 'Manage Event', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Student/meventImg', title: 'Manage Event Image', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/Student/mtimetable', title: 'Manage Time-Table', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        
      ]
    }
  }
}