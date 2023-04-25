import React, { useState } from "react";
import './css/stepper.css'
import {
    Typography,
    TextField,
    Stepper,
    Step,
    StepLabel,
} from "@material-ui/core";
import { Button} from 'rsuite';
import { makeStyles } from "@material-ui/core/styles";
import {
    useForm,
    Controller,
    FormProvider,
    useFormContext,
} from "react-hook-form";
import { useNavigate, useNavigation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    button: {
        marginRight: theme.spacing(1),
    },
}));

function getSteps() {
   
    return [
        "Basic information",
        "Contact Information",
        "Personal Information",
    
    ];
}
const BasicForm = () => {
    const { control } = useFormContext();
    return (
        <>
            <Controller
                control={control}
                name="firstName"
                render={({ field }) => (
                    <TextField
                        id="first-name"
                        label="First Name"
                        variant="outlined"
                        placeholder="Enter Your First Name"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />

            <Controller
                control={control}
                name="lastName"
                render={({ field }) => (
                    <TextField
                        id="last-name"
                        label="Last Name"
                        variant="outlined"
                        placeholder="Enter Your Last Name"
                        fullWidth
                        margin="normal"
                        {...field}
                        
                    />
                )}
            />

            <Controller
                control={control}
                name="nickName"
                render={({ field }) => (
                    <TextField
                        id="nick-name"
                        label="Nick Name"
                        variant="outlined"
                        placeholder="Enter Your Nick Name"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />
        </>
    );
};
const ContactForm = () => {
    const { control } = useFormContext();
    return (
        <>
            <Controller
                control={control}
                name="emailAddress"
                render={({ field }) => (
                    <TextField
                        id="email"
                        label="E-mail"
                        variant="outlined"
                        placeholder="Enter Your E-mail Address"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />

            <Controller
                control={control}
                name="phoneNumber"
                render={({ field }) => (
                    <TextField
                        id="phone-number"
                        label="Phone Number"
                        variant="outlined"
                        placeholder="Enter Your Phone Number"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />
            <Controller
                control={control}
                name="alternatePhone"
                render={({ field }) => (
                    <TextField
                        id="alternate-phone"
                        label="Alternate Phone"
                        variant="outlined"
                        placeholder="Enter Your Alternate Phone"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />
        </>
    );
};
const PersonalForm = () => {
    const { control } = useFormContext();
    return (
        <>
            <Controller
                control={control}
                name="address1"
                render={({ field }) => (
                    <TextField
                        id="address1"
                        label="Address 1"
                        variant="outlined"
                        placeholder="Enter Your Address 1"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />
            <Controller
                control={control}
                name="address2"
                render={({ field }) => (
                    <TextField
                        id="address2"
                        label="Address 2"
                        variant="outlined"
                        placeholder="Enter Your Address 2"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />
            <Controller
                control={control}
                name="country"
                render={({ field }) => (
                    <TextField
                        id="country"
                        label="Country"
                        variant="outlined"
                        placeholder="Enter Your Country Name"
                        fullWidth
                        margin="normal"
                        {...field}
                    />
                )}
            />
        </>
    );
};
// const PaymentForm = () => {
//     const { control } = useFormContext();
//     return (
//         <>
//             <Controller
//                 control={control}
//                 name="cardNumber"
//                 render={({ field }) => (
//                     <TextField
//                         id="cardNumber"
//                         label="Card Number"
//                         variant="outlined"
//                         placeholder="Enter Your Card Number"
//                         fullWidth
//                         margin="normal"
//                         {...field}
//                     />
//                 )}
//             />
//             <Controller
//                 control={control}
//                 name="cardMonth"
//                 render={({ field }) => (
//                     <TextField
//                         id="cardMonth"
//                         label="Card Month"
//                         variant="outlined"
//                         placeholder="Enter Your Card Month"
//                         fullWidth
//                         margin="normal"
//                         {...field}
//                     />
//                 )}
//             />
//             <Controller
//                 control={control}
//                 name="cardYear"
//                 render={({ field }) => (
//                     <TextField
//                         id="cardYear"
//                         label="Card Year"
//                         variant="outlined"
//                         placeholder="Enter Your Card Year"
//                         fullWidth
//                         margin="normal"
//                         {...field}
//                     />
//                 )}
//             />
//         </>
//     );
// };



const LinaerStepper = () => {
    
    const methods = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            nickName: "",
            emailAddress: "",
            phoneNumber: "",
            alternatePhone: "",
            address1: "",
            address2: "",
            country: "",
            cardNumber: "",
            cardMonth: "",
            cardYear: "",
        },
    });
    const [activeStep, setActiveStep] = useState(0);
    const [skippedSteps, setSkippedSteps] = useState([]);
    const steps = getSteps();

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skippedSteps.includes(step);
    };

    const handleNext = (data) => {
        console.log(data);
        if (activeStep === steps.length - 1) {
            // fetch("https://jsonplaceholder.typicode.com/comments")
            //     .then((data) => data.json())
            //     .then((res) => {
            //         console.log(res);
            //         setActiveStep(activeStep + 1);
            //     });
            setActiveStep(activeStep + 1);
        } 
        else {
            setActiveStep(activeStep + 1);
            setSkippedSteps(
                skippedSteps.filter((skipItem) => skipItem !== activeStep)
            );
        }
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const handleSkip = () => {
        if (!isStepSkipped(activeStep)) {
            setSkippedSteps([...skippedSteps, activeStep]);
        }
        setActiveStep(activeStep + 1);
    };
    const size = {
        height: 75,
        width: 105,
        float: 'left'
    }
    const inp = {
        paddingTop: 100,
    }
    const button = {
        paddingTop: 40,
        paddingBottom: 60
    }
    

    // const onSubmit = (data) => {
    //   console.log(data);
    // };
    const navigate=useNavigate();
    return (<div className="Login">

        <img className='nav-img-1' style={size} src='https://res.cloudinary.com/duc6xzza7/image/upload/v1682430249/logo_b0q0ba.png' alt='img' />
        <div style={inp}>


            {activeStep !== steps.length ? (
                <>
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(handleNext)}>
                            {getStepContent(activeStep)}
                            <div style={button}>

                                <Button
                                    
                                    style={{padding:5,paddingRight:15,paddingLeft:15 ,border:'none',borderRadius:4}}
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    // className="click"
                                >
                                    back
                                </Button>
                                {isStepOptional(activeStep) && (
                                  
                                    
                                    <Button style={{backgroundColor:'#3CB373',padding:5,paddingRight:15,paddingLeft:15 ,border:'none',marginLeft:15,borderRadius:4}} onClick={handleSkip}>
                                        Skip
                                    </Button>
                                )}
                                <Button
                                   style={{backgroundColor:'#3CB373',padding:5 ,paddingRight:15,paddingLeft:15,border:'none',marginLeft:15,borderRadius:4}}
                                    variant="contained"
                                    color="primary"
                                    // onClick={handleNext}
                                    type="submit"
                                >
                                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                                </Button>
                            </div>
                        </form>
                    </FormProvider>
                     <Stepper alternativeLabel activeStep={activeStep} style={{color:"green"}}   >
                {steps.map((step, index) => {
                    const labelProps = {};
                    const stepProps = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = (
                            <Typography
                                variant="caption"
                                align="center"
                                style={{ display: "block" }}
                            >
                                optional
                            </Typography>
                        );
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step {...stepProps} key={index} style={{color:"green"}}>
                            <StepLabel {...labelProps} style={{color:"green"}}>{step}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <h3 style={{color:"green"}}>{Math.round((activeStep/3)*100)} %</h3>
                </>
                
            ) : (
                    <div>
                <Typography variant="h3" align="center" style={{paddingTop:160}}>
                    Thank You
                {/* {alert("Signup Successfully")} */}
               { navigate('/dashboard')}
                </Typography>
                
</div>

)}
           
        </div>
        
    </div>

    );
    
    function getStepContent(step) {
        switch (step) {
            case 0:
                return <BasicForm />;

            case 1:
                return <ContactForm />;
            case 2:
                return <PersonalForm />;
          
            default:
                return "unknown step";
        }
    }
};

export default LinaerStepper;