import  { useState } from 'react';
import { Steps, Button, message } from 'antd';
import { UserOutlined, InfoCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';

const { Step } = Steps;

const StepperComponent = () => {
    const [current, setCurrent] = useState(0);
  
    // Function to handle step change
    const next = () => {
      setCurrent(current + 1);
    };
  
    const prev = () => {
      setCurrent(current - 1);
    };
  
    // Function to handle form submission (on last step)
    const onSubmit = () => {
      message.success('Stepper form submitted successfully!');
    };
  
    // Steps content for each step
    const stepsContent = [
      {
        title: 'Step 1',
        content: <div>Step 1 Content: User Information Form</div>,
      },
      {
        title: 'Step 2',
        content: <div>Step 2 Content: Address Details</div>,
      },
      {
        title: 'Step 3',
        content: <div>Step 3 Content: Review & Submit</div>,
      },
    ];
  
    return (
      <div style={{ width: '80%', margin: '0 auto' }}>
        <Steps current={current} onChange={setCurrent} responsive>
          <Step
            title="User Info"
            icon={<UserOutlined />}
            description="Enter your basic information"
          />
          <Step
            title="Address"
            icon={<InfoCircleOutlined />}
            description="Provide your address details"
          />
          <Step
            title="Review"
            icon={<CheckCircleOutlined />}
            description="Review your details and submit"
          />
        </Steps>
        <div className="steps-content" style={{ marginTop: 20 }}>
          {stepsContent[current].content}
        </div>
        <div className="steps-action" style={{ marginTop: 24 }}>
          {current < stepsContent.length - 1 && (
            <Button type="primary" onClick={next}>
              Next
            </Button>
          )}
          {current === stepsContent.length - 1 && (
            <Button type="primary" onClick={onSubmit}>
              Submit
            </Button>
          )}
          {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={prev}>
              Previous
            </Button>
          )}
        </div>
      </div>
    );
  };
  
  export default StepperComponent;