import { Typography, Layout, Row, Col } from "antd";
import { CoffeeOutlined } from "@ant-design/icons";

import TempGraph from "components/temp-graph/TempGraph";

import "./App.scss";

const { Title, Text, Link } = Typography;
const { Header, Footer, Sider, Content } = Layout;

function App() {
  const currentYear = new Date().getFullYear();
  return (
    <Layout className="main-layout">
      <Header className="header">
        <Title className="page-title">Eco house - dashboard</Title>
      </Header>
      <Layout>
        <Sider className="sider"></Sider>
        <Content>
          <Row justify="center">
            <Col span={20}>
              <TempGraph />
            </Col>
          </Row>
        </Content>
      </Layout>
      <Footer className="footer">
        <Text type="secondary">
          Created with <CoffeeOutlined /> by
          <Link href="https://www.jkrymarys.pl/"> jkrymarys.pl </Link>©
          {currentYear}
        </Text>
      </Footer>
    </Layout>
  );
}

export default App;
