import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import swal from 'sweetalert2';
import { MySwitchComponent } from '../../switch/switch.component';


@Component({
    selector: 'app-mevent',
    templateUrl: './mevent.component.html',
    styleUrls: ['./mevent.component.scss']
})
export class MeventComponent implements OnInit {

    courses: any;
    tbldata: any;
    alertsettings;

    constructor(public http: HttpClient, private toast: ToastrService) { }


    standardform: FormGroup = new FormGroup({
        Course_ID: new FormControl(''),
        Name: new FormControl(''),
    });




    onSubmit() {
        console.log(this.standardform.value);
    }

    fetchstan() {
        this.http.get("https://college-managment-system.herokuapp.com/Admin/Standard").subscribe((data: any) => {
            this.tbldata = data.map((value: any) => {
                return {
                    '_id': value._id,
                    'Name': value.Name,
                    'Course_Name': value.Course_ID.Course_Name,
                    'Duration': value.Course_ID.Duration,
                    'Created_On': value.Created_On.substr(0, 10),
                    'Is_Active': value.Is_Active,
                }
            })
        })
    }
    ngOnInit() {
        this.fetchstan()
        this.http.get("https://college-managment-system.herokuapp.com/Admin/Course").subscribe((data: any) => {
            this.courses = data
            this.alertsettings = {
                delete: {
                    confirmDelete: true,
                    deleteButtonContent: '<i class="ft-x danger font-medium-1 mr-2"></i>'
                },

                edit: {
                    confirmSave: true,
                    editButtonContent: '<i class="ft-edit-2 info font-medium-1 mr-2"></i>'
                },
                columns: {
                    _id: {
                        title: 'ID',
                        editable: false,

                    },
                    Name: {
                        title: 'Standard',
                    },
                    Course_Name: {
                        title: 'Course',
                        editor: {
                            type: 'list',
                            config: {
                                list: this.courses ? this.courses.map((data: any) => { return { title: data.Course_Name, value: data._id } }) : []
                            }
                        }
                    },
                    Duration: {
                        title: 'Duration',
                    },
                    Created_On: {
                        title: 'Created On',

                    },

                    Is_Active: {
                        title: 'Active',
                        type: 'custom',
                        renderComponent: MySwitchComponent,
                        onComponentInitFunction(instance) {
                            instance.save.subscribe(({ rowdatavalue }) => {
                                //update_active(data)

                            });
                        }

                    },


                },
                actions: {
                    add: false
                },
                attr: {
                    class: "table table-responsive"
                },

            };



        })
    }


    postdata() {
        console.log(this.standardform.value)
        this.http.post("https://college-managment-system.herokuapp.com/Admin/Standard", this.standardform.value).subscribe((data: any) => {
            if (data) {
                this.toast.success(data.Success);
                this.fetchstan()

            }
        })
    }


    //  For confirm action On Delete
    onDeleteConfirm(event) {
        var that = this
        swal.fire({
            title: 'Are you sure you want to delete?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0CC27E',
            cancelButtonColor: '#FF586B',
            confirmButtonText: 'Yes, Delete It!',
            cancelButtonText: 'No, cancel!',
            confirmButtonClass: 'btn btn-success btn-raised mr-5',
            cancelButtonClass: 'btn btn-danger btn-raised',
            buttonsStyling: false
        }).then(function (data) {
            if (data.dismiss === swal.DismissReason.cancel) {
                event.confirm.reject();
                swal.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            } else {
                console.log(event.data)

                that.http.delete("https://college-managment-system.herokuapp.com/Admin/Course?_id=" + event.data._id).subscribe((data: any) => {
                    if (data.Error) {
                        that.toast.error(data.Error);
                    } else {
                        that.toast.error(data.Success);
                        that.fetchstan()
                    }
                })
                event.confirm.resolve();
                swal.fire(
                    'Deleted!',
                    'Your imaginary file has been deleted.',
                    'success'
                )
            }
        })
    }

    //  For confirm action On Save
    onSaveConfirm(event) {
        var that = this
        swal.fire({
            title: 'Are you sure you want to Update?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0CC27E',
            cancelButtonColor: '#FF586B',
            confirmButtonText: 'Yes, Update It!',
            cancelButtonText: 'No, Cancel!',
            confirmButtonClass: 'btn btn-success btn-raised mr-5',
            cancelButtonClass: 'btn btn-danger btn-raised',
            buttonsStyling: false
        }).then(function (data) {
            if (data.dismiss === swal.DismissReason.cancel) {
                event.confirm.reject();
                swal.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            } else {
                console.log(event.data)
                that.http.put("https://college-managment-system.herokuapp.com/Admin/Course", { ...event.newData, Course_ID: event.newData.Course_Name }).subscribe((data: any) => {
                    if (data.Error) {
                        that.toast.error(data.Error);
                    } else {
                        that.toast.success(data.Success);
                        that.fetchstan()
                        event.confirm.resolve(event.newData);

                    }
                })
                event.confirm.resolve();
                swal.fire(
                    'Updated!',
                    'Your imaginary file has been Updated.',
                    'success'
                )
            }
        })

    }


}
export const routedComponents = [MeventComponent];
