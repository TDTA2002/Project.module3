import { useContext, useEffect } from 'react';
import './info.scss';
import { RootContext } from '../../App';
import api from '@api'
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem
} from 'mdb-react-ui-kit';
import Receipts from '../product/Receipts';

export default function ProfilePage() {
    const { userStore } = useContext(RootContext);

    console.log("userStore", userStore)

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            window.location.href = "/"
        }
    }, [])



    return (
        <section style={{ backgroundColor: '#eee' }}>
            <MDBContainer className="py-5">
                <MDBRow>
                    <MDBCol>
                        <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                               <button> <a href='/'>Home</a></button>
                     
                        </MDBBreadcrumb>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                  
                    <MDBCol lg="8" style={{display:"flex"}}>
                        <MDBCard className="mb-4">
                            <MDBCardBody>
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Full Name: </MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">{userStore.data?.last_name} {userStore.data?.first_name}</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Email</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">{userStore.data?.email}</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Phone</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">(097) 234-5678</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Mobile</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">(098) 765-4321</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Address</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">Bay Area, San Francisco, CA</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                        <form className='changePassword_form' onSubmit={async (e) => {
                            e.preventDefault();
                            alert("đã gọi")
                            let result = await api.users.changePassword({
                                new_pass: e.target.new_pass.value,
                                old_pass: e.target.old_pass.value
                            })
                            console.log("result", result)
                        }}>
                            <div className="form_group">
                                <label htmlFor="current_password">Current Password</label><br />
                                <input type="text" id='current_password' placeholder='Current Password' name='old_pass' />
                            </div>
                            <div className="form_group">
                                <label htmlFor="new_password">New Password</label><br />
                                <input type="text" id='new_password' placeholder='New Password' name='new_pass' />
                            </div>
                            <div className="form_group">
                                <label htmlFor="confirm_password">Confirm Password</label><br />
                                <input type="text" id='confirm_password' placeholder='Confirm Password' name='renew_pass' />
                            </div>
                            <button>Submit</button>
                        </form>

                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <Receipts/>
        </section>
    );
}