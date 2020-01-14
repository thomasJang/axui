import React from 'react';
import styled from 'styled-components';
import {
  Form,
  Input,
  InputNumber,
  Button,
  Collapse,
  Radio,
  Switch,
} from 'antd';
import { FormComponentProps, FormProps, ValidateCallback } from 'antd/lib/form';
import {
  ISettings,
  ISettingsAction,
  SettingsActionType,
} from 'common/settings';
import { JSONValidator } from 'common/utils';

export interface ColumnsSettingsProps extends FormComponentProps, ISettings {
  handleChangeOption: (action: ISettingsAction) => void;
}

const ColumnsSettingsForm: React.FC<ColumnsSettingsProps> = props => {
  const { getFieldDecorator, validateFields, getFieldsValue } = props.form;
  const {
    columns,
    handleChangeOption,
    enableFrozenCell,
    frozenColumnIndex = 1,
    frozenRowIndex = 1,
  } = props;

  return (
    <Form layout="vertical" colon={false}>
      <Form.Item
        labelCol={{ xs: 24, sm: 24 }}
        wrapperCol={{ xs: 24, sm: 24 }}
        label="columns"
        labelAlign="left"
      >
        {getFieldDecorator('columns', {
          initialValue: JSON.stringify(columns),
          rules: [
            {
              validator: JSONValidator,
            },
          ],
        })(<Input.TextArea rows={6} />)}
        <div style={{ textAlign: 'right' }}>
          <Button
            htmlType="button"
            type="primary"
            size="small"
            onClick={() => {
              props.form.validateFields(['columns'], (errors, values) => {
                handleChangeOption({
                  type: SettingsActionType.SET_COLUMNS,
                  value: JSON.parse(values.columns),
                });
              });
            }}
          >
            Apply
          </Button>
        </div>
      </Form.Item>
      <Form.Item label={'enableFrozenCell'}>
        <Switch
          defaultChecked={enableFrozenCell}
          onChange={value =>
            handleChangeOption({
              type: SettingsActionType.SET_ENABLE_FROZEN_CELL,
              value,
            })
          }
        />
      </Form.Item>
      <Form.Item label={'frozenColumnIndex'}>
        <InputNumber
          size="small"
          defaultValue={frozenColumnIndex}
          onChange={value => {
            handleChangeOption({
              type: SettingsActionType.SET_FROZEN_COLUMN_INDEX,
              value,
            });
          }}
        />
      </Form.Item>
      <Form.Item label={'frozenRowIndex'}>
        <InputNumber
          size="small"
          defaultValue={frozenRowIndex}
          onChange={value => {
            handleChangeOption({
              type: SettingsActionType.SET_FROZEN_ROW_INDEX,
              value,
            });
          }}
        />
      </Form.Item>
    </Form>
  );
};
const ColumnsSettings = Form.create<ColumnsSettingsProps>({})(
  ColumnsSettingsForm,
);
export default ColumnsSettings;
