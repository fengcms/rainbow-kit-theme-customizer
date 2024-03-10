import { FC, useState } from 'react'

import { Button, Col, Form, type FormProps, Input, InputNumber, Radio, type RadioChangeEvent, Row } from 'antd'
import { merge } from 'lodash'

// import { RainbowKitProvider, darkTheme, lightTheme } from '@rainbow-me/rainbowkit'
import { useTheme } from '@/hooks/useTheme'

import { dark, light } from './defaultTheme'

const Customizer: FC = () => {
  // console.log(JSON.stringify(lightTheme(), null, 2))
  const { changeTheme } = useTheme()
  const [initialValues, setInitialValues] = useState<any>(null)
  const [baseTheme, setBaseTheme] = useState('')

  const reSetBaseTheme = (e: RadioChangeEvent) => {
    const { value } = e.target
    setBaseTheme(value)
    setInitialValues(value === 'light' ? light : dark)
  }
  const onFinish: FormProps['onFinish'] = (values) => {
    console.log('Success:', values)
  }
  const onChange: FormProps['onValuesChange'] = (_, values) => {
    console.log('Success:', merge(initialValues, values))
  }
  return (
    <div className="p-home-customizer">
      <Form.Item label="选择基础什么风格为基础进行修改">
        <Radio.Group
          options={[
            { label: 'Dark', value: 'dark' },
            { label: 'Light', value: 'light' }
          ]}
          onChange={reSetBaseTheme}
          value={baseTheme}
          optionType="button"
          buttonStyle="solid"
        />
      </Form.Item>
      <Form
        name="customizer"
        layout="vertical"
        onFinish={onFinish}
        initialValues={initialValues}
        onValuesChange={onChange}
      >
        <Form.Item label="模态框模糊值" name={['blurs', 'modalOverlay']}>
          <InputNumber suffix="px" />
        </Form.Item>
        <Form.Item label="字体" name={['fonts', 'body']}>
          <Input />
        </Form.Item>
        <h3>圆角曲率</h3>
        <Row gutter={20}>
          <Col>
            <Form.Item label="actionButton" name={['radii', 'actionButton']}>
              <InputNumber defaultValue={9999} suffix="px" />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label="connectButton" name={['radii', 'connectButton']}>
              <InputNumber defaultValue={12} suffix="px" />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label="menuButton" name={['radii', 'menuButton']}>
              <InputNumber defaultValue={12} suffix="px" />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label="modal" name={['radii', 'modal']}>
              <InputNumber defaultValue={12} suffix="px" />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label="modalMobile" name={['radii', 'modalMobile']}>
              <InputNumber defaultValue={12} suffix="px" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Customizer
