import React from "react";
import { Badge } from "reactstrap";
import { NameContainer, FlexColumn, Name, Email, Avatar } from "../components";

export const TableRow = ({
  id,
  firstName,
  lastName,
  image,
  email,
  phone,
  address: { city },
  bloodGroup,
}) => {
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>
        <NameContainer>
          <Avatar src={image} />
          <FlexColumn>
            <Name>{firstName + lastName}</Name>
            <Email>{email}</Email>
          </FlexColumn>
        </NameContainer>
      </td>
      <td>{city}</td>
      <td className="text-center">
        {<Badge color="success">{bloodGroup}</Badge>}
      </td>
      <td>{phone}</td>
      <td className="text-center">
        <a href="#">Edit</a>
      </td>
    </tr>
  );
};
