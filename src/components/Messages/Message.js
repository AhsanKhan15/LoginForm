import { Typography, List } from "antd";
const { Title } = Typography;

//this function render success or error message
function Message(props) {
  const { message, userDetail } = props.loginResult;
  let { firstNameAdmin, lastNameAdmin, companyId, currentLocation } =
    userDetail;
  return (
    <div>
      <Typography>
        <Title level={2}>
          {message === "error"
            ? "Invalid Credentials, Please try again"
            : `${
                firstNameAdmin + " " + lastNameAdmin
              }, you are successfully login to XFOIL`}
        </Title>
        {message === "success" && (
          <div>
            <Title level={3}>CompanyId: {companyId}</Title>
            <List
              header={<Title level={4}>Location Objects</Title>}
              itemLayout="horizontal"
              dataSource={currentLocation}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta title={item.locationName} />
                </List.Item>
              )}
            />
          </div>
        )}
      </Typography>
    </div>
  );
}

export default Message;
