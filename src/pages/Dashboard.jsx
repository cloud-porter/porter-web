import React from "react";
import { Layout, Menu, Card, Statistic, Row, Col, Typography, Tag, List, Space } from "antd";
import {
  FileOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  SettingOutlined,
  BarChartOutlined,
  BellOutlined,
  FileTextOutlined,
  HomeOutlined,
  UploadOutlined,
  DownloadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;

const stats = [
  { label: "Total Transfers", value: 1234, trend: 12, icon: <UploadOutlined /> },
  { label: "Successful Transfers", value: 1189, trend: 8, icon: <CheckCircleOutlined style={{ color: '#52c41a' }} /> },
  { label: "Failed Transfers", value: 45, trend: -5, icon: <CloseCircleOutlined style={{ color: '#ff4d4f' }} /> },
  { label: "Pending Tasks", value: 23, sub: "2 urgent", icon: <ClockCircleOutlined style={{ color: '#faad14' }} /> },
];

const transfers = [
  { name: "dataset_2024.csv", size: "2.4 MB", time: "2 min ago", status: "completed" },
  { name: "backup_files.zip", size: "15.2 MB", time: "5 min ago", status: "in progress" },
  { name: "report_q1.pdf", size: "890 KB", time: "10 min ago", status: "completed" },
  { name: "image_gallery.tar", size: "8.7 MB", time: "15 min ago", status: "failed" },
  { name: "config_backup.json", size: "45 KB", time: "20 min ago", status: "completed" },
];

const statusColor = {
  completed: 'success',
  failed: 'error',
  'in progress': 'processing',
};
const statusText = {
  completed: 'Completed',
  failed: 'Failed',
  'in progress': 'In Progress',
};

export default function Dashboard() {
  return (
    <Layout style={{ minHeight: '100vh', background: '#f7f9fb' }}>
      <Sider width={260} style={{ background: '#0a1931' }}>
        <div style={{ color: '#fff', fontWeight: 700, fontSize: 26, padding: 32, textAlign: 'left', letterSpacing: 1 }}>
          Cloud <span style={{ color: '#1890ff' }}>Proter</span>
          <div style={{ fontSize: 13, color: '#bfbfbf', marginTop: 4 }}>File Transfer</div>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{ background: '#0a1931', fontSize: 16 }} items={[
          { key: '1', icon: <HomeOutlined />, label: 'Dashboard' },
          { key: '2', icon: <FileOutlined />, label: 'File Transfers' },
          { key: '3', icon: <ClockCircleOutlined />, label: 'Task Scheduler' },
          { key: '4', icon: <BellOutlined />, label: 'Alerts' },
          { key: '5', icon: <FileTextOutlined />, label: 'Logs & Reports' },
          { key: '6', icon: <BarChartOutlined />, label: 'Analytics' },
          { key: '7', icon: <SettingOutlined />, label: 'Settings' },
        ]} />
      </Sider>
      <Layout style={{ background: '#f7f9fb' }}>
        <Header style={{ background: '#f7f9fb', padding: '32px 40px 0 40px' }}>
          <Title level={2} style={{ margin: 0, fontWeight: 700 }}>Dashboard</Title>
          {/* <Text type="secondary" style={{ fontSize: 16 }}>Overview of your file transfer activities</Text> */}
        </Header>
        <Content style={{ margin: '32px 40px', minHeight: 0 }}>
          <Row gutter={[32, 32]}>
            {stats.map((item) => (
              <Col xs={24} sm={12} md={6} key={item.label}>
                <Card bordered hoverable style={{ borderRadius: 12, minHeight: 120 }} bodyStyle={{ padding: 24 }}>
                  <Space align="center" size={16}>
                    {item.icon}
                    <Statistic
                      title={<span style={{ fontWeight: 500 }}>{item.label}</span>}
                      value={item.value}
                      valueStyle={{ fontWeight: 700 }}
                    />
                  </Space>
                  <div style={{ marginTop: 8 }}>
                    {item.trend !== undefined && (
                      <Text type={item.trend > 0 ? 'success' : 'danger'}>
                        {item.trend > 0 ? `+${item.trend}% from last month` : `${item.trend}% from last month`}
                      </Text>
                    )}
                    {item.sub && <Text type="warning" style={{ marginLeft: 8 }}>{item.sub}</Text>}
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
          <Row gutter={[32, 32]} style={{ marginTop: 32 }}>
            <Col xs={24} lg={16}>
              <Card title={<span style={{ fontWeight: 600 }}>Transfer Activity</span>} bordered style={{ borderRadius: 12 }} bodyStyle={{ padding: 24 }}>
                <div style={{ height: 220, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaa' }}>
                  <svg width="320" height="120">
                    <polyline fill="none" stroke="#1890ff" strokeWidth="3" points="20,100 70,80 120,60 170,40 220,30 300,20" />
                    <polyline fill="none" stroke="#52c41a" strokeWidth="3" points="20,110 70,100 120,90 170,80 220,70 300,60" />
                    <circle cx="300" cy="20" r="5" fill="#1890ff" />
                    <circle cx="300" cy="60" r="5" fill="#52c41a" />
                  </svg>
                </div>
                <div style={{ display: 'flex', gap: 24, justifyContent: 'center', marginTop: 16 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 12, height: 12, background: '#1890ff', borderRadius: '50%', display: 'inline-block' }}></span>Uploads</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 12, height: 12, background: '#52c41a', borderRadius: '50%', display: 'inline-block' }}></span>Downloads</span>
                </div>
              </Card>
            </Col>
            <Col xs={24} lg={8}>
              <Card title={<span style={{ fontWeight: 600 }}>Recent Transfers</span>} bordered style={{ borderRadius: 12 }} bodyStyle={{ padding: 24 }}>
                <List
                  itemLayout="horizontal"
                  dataSource={transfers}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        title={<span style={{ fontWeight: 500 }}>{item.name}</span>}
                        description={<span style={{ color: '#888' }}>{item.size} • {item.time}</span>}
                      />
                      <Tag color={statusColor[item.status]}>{statusText[item.status]}</Tag>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}
