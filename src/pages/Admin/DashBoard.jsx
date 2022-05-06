import { Statistic, Card, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

export default () => (
  <div className="site-statistic-demo-card" style={{backgroundColor:"#eee",padding:20}}>
    <Row gutter={16}>

      <Col span={8}>
        <Card title={<h3>新增用户</h3>}>
          <Statistic
            title="Active"
            value={11.28}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </Card>
      </Col>

      <Col span={8}>
        <Card title={<h3>日活用户</h3>}>
          <Statistic
            title="Idle"
            value={9.3}
            precision={2}
            valueStyle={{ color: '#cf1322' }}
            prefix={<ArrowDownOutlined />}
            suffix="%"
          />
        </Card>
      </Col>

      <Col span={8}>
        <Card title={<h3>总访问量</h3>}>
          <Statistic
            title="Active"
            value={11.28}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </Card>
      </Col>

    </Row>

    <Row gutter={16} style={{marginTop:20}}>

      <Col span={8}>
        <Card title={<h3>新增用户</h3>}>
          <Statistic
            title="Active"
            value={11.28}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </Card>
      </Col>

      <Col span={8}>
        <Card title={<h3>日活用户</h3>}>
          <Statistic
            title="Idle"
            value={9.3}
            precision={2}
            valueStyle={{ color: '#cf1322' }}
            prefix={<ArrowDownOutlined />}
            suffix="%"
          />
        </Card>
      </Col>

      <Col span={8}>
        <Card title={<h3>总访问量</h3>}>
          <Statistic
            title="Active"
            value={11.28}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </Card>
      </Col>

    </Row>

  </div>
);