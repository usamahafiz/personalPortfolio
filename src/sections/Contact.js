import React , {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import '../scss/_contact.scss'
import useFirestore from '../hooks/UseFirestore';
import { Button, Form, Input , Card, notification } from 'antd';

const Contact = () => {
  const {addMessage } = useFirestore();
  const [ loading , setIsLoading ] = useState(false)
  const [form] = Form.useForm(); // Create a form instance using useForm


  const onFinish = async (values) =>{
    setIsLoading(true)
    try {
      const { email , message } = values;
      await addMessage({ email , message });
      notification.success({
        message: 'Message sent successfully',
        description: 'We will get back to you soon',

      });
      form.resetFields(); 
    // Clear the form fields after success
    }
      catch(error){
        notification.error({
          message: 'Error sending message',
          description: error.message,
        })
      }
      finally{
        setIsLoading(false)
      }
   
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='contact-container' id='contact'>
      <Card className="contact-card">
        <div className="contact-info">
          <h2 className='text-center'>Get in Touch</h2>
          <p><FontAwesomeIcon icon={faPhone} />+92 305-5565781</p>
          <p><FontAwesomeIcon icon={faEnvelope} />hafizmuhammadusama664@gmail.com</p>
          <div className="social-icons">
            <a href="https://wa.me/923055565781" target='blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a href="https://www.facebook.com/people/Muhammad-Usama/pfbid0Bdm5cP4EBnLG6LCKXWNS2mWkqpgjuVwK11vcbdQw6bQNmZmvJN7qnyB7pz8mDv9Dl/?mibextid=ZbWKwL" target='blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.linkedin.com/in/hafiz-usama-38a9922b0/" target='blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/usamahafiz" target='blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
        <div className="form-section">
          <h2>Send Me a Message</h2>
          <Form className='mt-3'
            layout='vertical'
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            >
          
            
            <Form.Item label="Name" name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Email" name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Subject" name="subject"
            rules={[{ required: true, message: 'Please input your subject!' }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Message" name="message"
            rules={[{ required: true, message: 'Please input your message!' }]}>
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit' loading={loading}>
                {loading ? 'Sending...' :"Send Message"}
              </Button>
            </Form.Item>


          </Form>
        </div>
      </Card>

    </div>
  )
}

export default Contact
