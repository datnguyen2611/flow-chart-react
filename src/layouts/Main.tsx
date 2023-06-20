import { Layout } from "antd";
import SideBar from "./SideBar";
import "./styles.scss";
import MainContent from "./MainContent";
const Main = () => {
  const { Header, Content, Sider } = Layout;

  return (
    <div className="wrapper">
      <Layout>
        <SideBar />
        <Layout>
          <Layout>
            {/* <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            <Content>
              <MainContent />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};
export default Main;
