import React, { useState, useMemo, useRef } from 'react';
import { Input, Button, Alert } from 'antd';
import styles from './index.less';

interface IProps {
  children: (arg: any) => React.ReactNode;
  direction?: 'vertical' | 'horizontal';
  minSize?: number;
  defaultSize?: number;
  initValue?: any;
}

const { TextArea } = Input;

const options = {
  selectOnLineNumbers: true,
};

export default ({
  children,
  direction = 'vertical',
  minSize = 100,
  defaultSize = 460,
  initValue,
}: IProps) => {
  const [error, setError] = useState('');
  const [code, setCode] = useState(() => {
    try {
      return JSON.stringify(initValue, null, 4);
    } catch (err: any) {
      setError('格式错误');
      return '';
    }
  });
  const valueRef = useRef(code);
  const config = useMemo(() => {
    try {
      setError('');
      return JSON.parse(code || '');
    } catch (err: any) {
      setError('JSON格式错误');
      return '';
    }
  }, [code]);
  const handleChange = (e: any) => {
    valueRef.current = e.target.value;
  };
  const handleRun = () => {
    setCode(valueRef.current);
  };
  return (
    <div className={styles.editorWrap}>
        <div className={styles.cpArea}>{children(config)}</div>
        <div className={styles.editorArea}>
          {!!error && <Alert message={error} type="error" showIcon />}
          <TextArea
            defaultValue={code}
            rows={16}
            onChange={handleChange}
            style={{ marginTop: 6, background: '#1e1e1e', color: '#fff' }}
          />
          <Button onClick={handleRun} type="primary" style={{ marginTop: 12 }}>
            运行
          </Button>
        </div>
    </div>
  );
};
