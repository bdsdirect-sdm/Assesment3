import {Form, Field, Formik, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './User.css'; 
import { json } from 'sequelize';
// import { useNavigate } from 'react-router-dom';


const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid Email').required('Required'),
  //  profilePhoto: Yup.mixed().required('Please upload an image'),
    companyAddress: Yup.string().required('Required'),
    companyCity: Yup.string().required('Required'),
    companyState: Yup.string().required('Required'),
    companyZip: Yup.number().required('Please enter Zip Code').min(6,"Required 6 digit"),
    homeAddress: Yup.string().required('Required'),
    homeCity: Yup.string().required('Required'),
    homeState: Yup.string().required('Required'),
    homeZip: Yup.number().required('Please enter Zip Code').min(6,'Required 6 digit'),
  //  appointmentLetter: Yup.mixed()
});

export default function User(){
    // const navigate = useNavigate();
    const handleUser = async (values: any) => {
        console.log(values);
        //return(false)
        try {
            axios.post("http://localhost:4000/user", values, {
                headers : {
                    "Content-Type" : 'application/json'
                }
            }).then((response) => {
                console.log(JSON.stringify(response.data));
              })
              .catch((error) => {
                console.log(error);
              });
           
        } catch (err) {
            alert("Error");
        }
    };

    return (
        <div className="User-container">
            <h1>User</h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                   // profilePhoto: '',
                    companyAddress: '',
                    companyCity: '',
                    companyState: '',
                    companyZip: '',
                    homeAddress: '',
                    homeCity: '',
                    homeState: '',
                    homeZip: '',
                  //  appointmentLetter: ''
                }}
                validationSchema={validationSchema}
                onSubmit={handleUser}
            >
                <Form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <Field type="name" name="name" placeholder="Enter your name" />
                        <ErrorMessage name="name" component="div" className="error-message" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <Field type="email" name="email" placeholder="Email" />
                        <ErrorMessage name="email" component="div" className="error-message" />
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="profilePhoto">Profile Photo</label>
                        <Field type="file" name="profilePhoto" placeholder="Upload your image" />
                        <ErrorMessage name="profilePhoto" component="div" className="error-message" />
                    </div> */}
                    <div className="form-group">
                        <label htmlFor="companyAddress">Company Address</label>
                        <Field type="companyAddress" name="companyAddress" placeholder="Enter your company Address" />
                        <ErrorMessage name="companyAddress" component="div" className="error-message" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="companyCity">Company City</label>
                        <Field type="companyCity" name="companyCity" placeholder="Enter your company city" />
                        <ErrorMessage name="companyCity" component="div" className="error-message" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="companyState">Company State</label>
                        <Field type="companyState" name="companyState" placeholder="Enter your company state" />
                        <ErrorMessage name="companyState" component="div" className="error-message" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="companyZip">Company Zip</label>
                        <Field type="companyzip" name="companyZip" placeholder="Enter your company Zip" />
                        <ErrorMessage name="companyZip" component="div" className="error-message" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="homeAddress">Home Address</label>
                        <Field type="homeAddress" name="homeAddress" placeholder="Enter your Home Address" />
                        <ErrorMessage name="homeAddress" component="div" className="error-message" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="homeCity">Home City</label>
                        <Field type="homeCity" name="homeCity" placeholder="Enter your Home City" />
                        <ErrorMessage name="homeCity" component="div" className="error-message" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="homeState">Home State</label>
                        <Field type="homeState" name="homeState" placeholder="Enter your Home State" />
                        <ErrorMessage name="homeState" component="div" className="error-message" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="homeZip">Home Zip</label>
                        <Field type="homeZip" name="homeZip" placeholder="Enter your Home Zip" />
                        <ErrorMessage name="homeZip" component="div" className="error-message" />
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="appointmentLetter">Appointment Letter</label>
                        <Field type="file" name="appointmentLetter" placeholder="Your appointment Letter" />
                        <ErrorMessage name="appointmentLetter" component="div" className="error-message" />
                    </div> */}
                    <button type="submit">Submit</button>

                </Form>
            </Formik>
        </div>
    );
}

