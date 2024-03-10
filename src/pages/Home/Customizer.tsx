import { FC, useState } from 'react'

import { Button, Col, Form, type FormProps, Input, InputNumber, Row } from 'antd'
import { merge } from 'lodash'

import { RainbowKitProvider, darkTheme, lightTheme } from '@rainbow-me/rainbowkit'

import { useTheme } from '@/hooks/useTheme'

const Customizer: FC = () => {
  console.log(lightTheme())
  const { changeTheme } = useTheme()
  const [initialValues, setInitialValues] = useState<any>()

  const onFinish: FormProps['onFinish'] = (values) => {
    console.log('Success:', values)
  }
  const onChange: FormProps['onValuesChange'] = (_, values) => {
    console.log('Success:', merge(initialValues, values))
  }
  return (
    <div className="p-home-customizer">
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

// type FieldType = {
//   blurs?: number
//   fonts?: string

//   actionButton?: number
//   connectButton?: number
//   menuButton?: number
//   modal?: number
//   modalMobile?: number

//   accentColor: string
//   accentColorForeground: string
//   actionButtonBorder: string
//   actionButtonBorderMobile: string
//   actionButtonSecondaryBackground: string
//   closeButton: string
//   closeButtonBackground: string
//   connectButtonBackground: string
//   connectButtonBackgroundError: string
//   connectButtonInnerBackground: string
//   connectButtonText: string
//   connectButtonTextError: string
//   connectionIndicator: string
//   downloadBottomCardBackground: string
//   downloadTopCardBackground: string
//   error: string
//   generalBorder: string
//   generalBorderDim: string
//   menuItemBackground: string
//   modalBackdrop: string
//   modalBackground: string
//   modalBorder: string
//   modalText: string
//   modalTextDim: string
//   modalTextSecondary: string
//   profileAction: string
//   profileActionHover: string
//   profileForeground: string
//   selectedOptionBorder: string
//   standby: string

//   connectButtonShadows1: number
//   connectButtonShadows2: number
//   connectButtonShadows3: number
//   connectButtonShadowsColor: string
//   dialogShadows1: number
//   dialogShadows2: number
//   dialogShadows3: number
//   dialogShadowsColor: string
//   profileDetailsActionShadows1: number
//   profileDetailsActionShadows2: number
//   profileDetailsActionShadows3: number
//   profileDetailsActionShadowsColor: string
//   selectedOptionShadows1: number
//   selectedOptionShadows2: number
//   selectedOptionShadows3: number
//   selectedOptionShadowsColor: string
//   selectedWalletShadows1: number
//   selectedWalletShadows2: number
//   selectedWalletShadows3: number
//   selectedWalletShadowsColor: string
//   walletLogoShadows1: number
//   walletLogoShadows2: number
//   walletLogoShadows3: number
//   walletLogoShadowsColor: string
// }
