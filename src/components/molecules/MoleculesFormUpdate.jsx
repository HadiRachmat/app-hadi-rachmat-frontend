import PropTypes from "prop-types";
import { Form, Input, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const MoleculesFormUpdate = ({ title, label, name, onChange, type = "text", fileList, setFileList}) => {
  if (type === "file") {
    const uploadProps= {
        beforeUpload: () => false,
        fileList,
        onChange:({fileList}) => setFileList(fileList),
        onRemove:() => setFileList([])
    }
    return (
      <Form.Item
        label={label}
        name={name}
        valuePropName="fileList"
        getValueFromEvent={(e) => {
          if (Array.isArray(e)) return e;
          return e?.fileList;
        }}
        extra="Hanya file JPG, PNG, atau PDF (maks. 25MB)"
      >
        <Upload
          beforeUpload={() => false}
          accept=".jpg,.jpeg,.png,.pdf"
          maxCount={1}
          {...uploadProps}
        >
          <Button icon={<UploadOutlined />}>Upload File</Button>
        </Upload>
      </Form.Item>
    );
  }

  return (
    <Form.Item label={label} name={name}>
      <Input
        placeholder={`Input New ${title}`}
        onChange={onChange}
        type={type}
      />
    </Form.Item>
  );
};

MoleculesFormUpdate.propTypes = {
  title: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.oneOf(["text", "file", "email", "password"]),
  name: PropTypes.string,
  fileList: PropTypes.array,
  setFileList: PropTypes.func,
};

export default MoleculesFormUpdate;
