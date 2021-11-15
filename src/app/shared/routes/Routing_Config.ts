import { Routes } from '@angular/router';

export const STUDENT_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'dashbord',
    pathMatch: 'full',
  },
  {
    path: 'adminregister',
    loadChildren: () => import('../../registrationa/registrationa.module').then(m => m.RegistrationaModule),
  },

  {
    path: 'mcourse',
    loadChildren: () => import('../../Admin/mcourse/mcourse.module').then(m => m.McourseModule),
  },
  {
    path: 'mstandard',
    loadChildren: () => import('../../Admin/mstandard/mstandard.module').then(m => m.MstandardModule)
  },
  {
    path: 'mdivision',
    loadChildren: () => import('../../Admin/mdivision/mdivision.module').then(m => m.MdivisionModule)
  },
  {
    path: 'msubject',
    loadChildren: () => import('../../Admin/msubject/msubject.module').then(m => m.MsubjectModule)
  },
  {
    path: 'dashbord',
    loadChildren: () => import('../../Admin/dashboard/dashbord.module').then(m => m.DashbordModule),
  },
  {
    path: 'mstudent',
    loadChildren: () => import('../../Admin/mstudent/mstudent.module').then(m => m.MstudentModule)
  },
  {
    path: 'noticeboard',
    loadChildren: () => import('../../Admin/noticeboard/noticeboard.module').then(m => m.NoticeBoardModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('../../Admin/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: '**',
    redirectTo: 'dashbord'
  },
];

export const FACULTY_ROUTES: Routes = [

  {
    path: '',
    redirectTo: 'dashbord',
    pathMatch: 'full',
  },
  {
    path: 'adminregister',
    loadChildren: () => import('../../registrationa/registrationa.module').then(m => m.RegistrationaModule),
  },

  {
    path: 'mcourse',
    loadChildren: () => import('../../Admin/mcourse/mcourse.module').then(m => m.McourseModule),
  },
  {
    path: 'mstandard',
    loadChildren: () => import('../../Admin/mstandard/mstandard.module').then(m => m.MstandardModule)
  },
  {
    path: 'mdivision',
    loadChildren: () => import('../../Admin/mdivision/mdivision.module').then(m => m.MdivisionModule)
  },
  {
    path: 'msubject',
    loadChildren: () => import('../../Admin/msubject/msubject.module').then(m => m.MsubjectModule)
  },
  {
    path: 'dashbord',
    loadChildren: () => import('../../Admin/dashboard/dashbord.module').then(m => m.DashbordModule),
  },
  {
    path: 'mstudent',
    loadChildren: () => import('../../Admin/mstudent/mstudent.module').then(m => m.MstudentModule)
  },
  {
    path: 'noticeboard',
    loadChildren: () => import('../../Admin/noticeboard/noticeboard.module').then(m => m.NoticeBoardModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('../../Admin/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: '**',
    redirectTo: 'dashbord'
  },
];

export const ADMIN_ROUTES: Routes = [

  {
    path: '',
    redirectTo: 'dashbord',
    pathMatch: 'full',
  },
  {
    path: 'adminregister',
    loadChildren: () => import('../../registrationa/registrationa.module').then(m => m.RegistrationaModule),
  },
  {
    path: 'mcourse',
    loadChildren: () => import('../../Admin/mcourse/mcourse.module').then(m => m.McourseModule),
  },
  {
    path: 'mfaculty',
    loadChildren: () => import('../../Admin/mfaculty/mfaculty.module').then(m => m.MfacultyModule),
  },
  {
    path: 'mstandard',
    loadChildren: () => import('../../Admin/mstandard/mstandard.module').then(m => m.MstandardModule)
  },
  {
    path: 'mdivision',
    loadChildren: () => import('../../Admin/mdivision/mdivision.module').then(m => m.MdivisionModule)
  },
  {
    path: 'msubject',
    loadChildren: () => import('../../Admin/msubject/msubject.module').then(m => m.MsubjectModule)
  },
  {
    path: 'dashbord',
    loadChildren: () => import('../../Admin/dashboard/dashbord.module').then(m => m.DashbordModule),
  },
  {
    path: 'mstudent',
    loadChildren: () => import('../../Admin/mstudent/mstudent.module').then(m => m.MstudentModule)
  },
  {
    path: 'noticeboard',
    loadChildren: () => import('../../Admin/noticeboard/noticeboard.module').then(m => m.NoticeBoardModule)
  },
  {
    path: 'mtimetable',
    loadChildren: () => import('../../Admin/mtimetable/mtimetable.module').then(m => m.MtimetableModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('../../Admin/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: '**',
    redirectTo: 'dashbord'
  },
];
