/*
 *  Messages
 *
 * This contains all the text for the  component.
 */
import { defineMessages } from "react-intl";

export const scope = "login";

export default defineMessages({
  phone: {
    id: `${scope}.phone`,
    defaultMessage: "số điện thoại",
  },
  password: {
    id: `${scope}.password`,
    defaultMessage: "mật khẩu",
  },
  test: {
    id: `${scope}.test`,
    defaultMessage: "test",
  },
});
