import Button from '../Components/Button';

export default {
  title: 'Button Example',
  component: Button,
  argTypes: { handleClick: { action: 'handleClick' } },
};

const Template = (args) => <Button {...args} />;

// export const Red = () => <Button label='press me' backgroundColor='red' />;
// use bind to copy the Template function and pass in empty object
export const Red = Template.bind({});
Red.args = {
  backgroundColor: 'red',
  label: 'press me now',
  size: 'md',
};

export const Orange = Template.bind({});
Orange.args = {
  backgroundColor: 'orange',
  label: 'orange button',
  size: 'lg',
};

export const Purple = Template.bind({});
Purple.args = {
  backgroundColor: 'purple',
  label: 'purple button',
  size: 'sm',
};
