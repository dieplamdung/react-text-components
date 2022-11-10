/* eslint-disable no-console */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Container from '~/atoms/Container';
import AddressesAccount from './AddressesAccount';

export default {
  title: 'Molecules/AddressesAccount',
  component: AddressesAccount,
} as ComponentMeta<typeof AddressesAccount>;


const Template: ComponentStory<typeof AddressesAccount> = (args) => {

  return (
    <Container>
      <AddressesAccount {...args} onRemoveAddress={(id) => console.log(id)} />
    </Container>
  )
};

export const Default = Template.bind({});
Default.args = {
  title: "Saved addresses",
  titleModalAdd: "Add address",
  titleModalUpdate: "Edit address",
  titleBtnSave: "Save",
  emptyAddress: {
    title: "Order your goodies faster",
    description: "Save your address to speed up your checkout.",
    titleBtn: "Add address"
  },
  titleBtnAddAddress: "Add a new address",
  listAddress: [
    {
      id: 1,
      titleDefault: "default",
      isDefault: true,
      titleBtnSetDefault: "Set as default",
      firstName: "Bruce",
      lastName: "Wayne",
      address: "200 Punggol Field, #30-100 840200, Singapore +65 9700 1234 Wayne enterprise",
      titleBtnEdit: "Edit",
      location: "Singapore",
      postalCode: 2000,
      apartment: "abc",
      town: "zyx",
      titleBtnRemove: "Remove",
      phoneNumber: "123456789"
    },
    // {
    //   id: 2,
    //   titleBtnSetDefault: "Set as default",
    //   firstName: "Bruce",
    //   lastName: "Wayne",
    //   address: "200 Punggol Field",
    //   titleBtnEdit: "Edit",
    //   titleBtnRemove: "Remove"
    // },
    // {
    //   id: 3,
    //   titleBtnSetDefault: "Set as default",
    //   firstName: "Bruce",
    //   lastName: "Wayne",
    //   address: "200 Punggol Field",
    //   titleBtnEdit: "Edit",
    //   titleBtnRemove: "Remove"
    // },
    // {
    //   id: 4,
    //   titleDefault: "default",
    //   isDefault: true,
    //   titleBtnSetDefault: "Set as default",
    //   firstName: "Bruce",
    //   lastName: "Wayne",
    //   address: "200 Punggol Field, #30-100 840200, Singapore +65 9700 1234 Wayne enterprise",
    //   titleBtnEdit: "Edit",
    //   titleBtnRemove: "Remove"
    // },
  ],
  templateAdd: {
    firstName: {
      title: "First name",
      valueDefault: "",
      messageEmpty: "Enter first name"
    },
    lastName: {
      title: "Last name",
      valueDefault: "",
      messageEmpty: "Enter last name"
    },
    address: {
      title: "Street address",
      valueDefault: "",
      messageEmpty: "Enter street address"
    },
    apartment: {
      title: "Apartment/Unit/Suite (optional)",
      valueDefault: ""
    },
    town: {
      title: "Town/City (optional)",
      valueDefault: ""
    },
    postalCode: {
      title: "Postal code/ZIP",
      valueDefault: "",
      messageEmpty: "Enter postal code or ZIP"
    },
    location: {
      title: "Location",
      valueDefault: "Singapore",
      messageEmpty: "Enter location"
    },
    phoneNumber: {
      title: "Phone number",
      valueDefault: "",
      messageEmpty: "Enter phone number"
    },
    company: {
      title: "Company name (optional)",
      valueDefault: "",
    },

  }
};