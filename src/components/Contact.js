import { Button, Snackbar, TextField } from '@mui/material'
import MuiAlert from '@mui/material/Alert'
import React from 'react'

const Contact = () => {
    const [Name, setName] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    const handleClick = () => {
        setOpen(true);
        return true;
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const fun = (e) => { 
        setName(e.target.value);
     }

    return (

        <section id='Contact'>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Your message is sending please wait !
                </Alert>
            </Snackbar>
            <h2 className='text-center text-4xl text-white mt-6' >Have Any Question ?</h2>
            <div className="w-48 mx-auto h-1 bg-gray-200 rounded mt-3 mb-4"></div>
            <form name="contact" action='https://formsubmit.co/nileshdarji282003@gmail.com'  method='POST' className=' w-full mx-auto md:p-5 flex items-center flex-col text-white' >
                <input type="hidden" name="_subject" value={"Message from "+Name} />
                <input type="hidden" name="_next" value="https://nileshdarji.netlify.app/#Home"/>
                <input type="hidden" name="_captcha" value="false"/>
                <input type="hidden" name="_template" value="table"/>
                <TextField required name='name' className='md:w-2/3 w-4/5' sx={{ margin: '15px 0' }} color='primary' variant='filled' label="Name" id="email" onChange={fun} />
                <TextField required name='email' className='md:w-2/3 w-4/5' sx={{ margin: '15px 0' }} type='email' color='primary' variant='filled' label="Email" id="name" />
                <TextField required multiline rows={5} className='md:w-2/3 w-4/5' sx={{ margin: '15px 0' }} color='primary' variant='filled' name='message' label="Your Message" id="name" />
                <Button  type='submit' onClick={handleClick} className='md:w-2/3 w-4/5 mt-3' size='large' variant='contained' style={{ background: '#ffffff', color: '#202020' }}>send</Button>
            </form>
        </section>

    )
}

export default Contact