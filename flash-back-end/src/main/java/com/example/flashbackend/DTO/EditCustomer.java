package com.example.flashbackend.DTO;

import java.math.BigInteger;

public class EditCustomer {
    private BigInteger customerID;
    private String firstName;

    private String lastName;

    private String gender;

    private String nic;

    private String contactNo;

    public EditCustomer(BigInteger customerID, String firstName, String lastName, String gender, String nic, String contactNo) {
        this.customerID = customerID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.nic = nic;
        this.contactNo = contactNo;
    }

    public EditCustomer(){

    }

    public BigInteger getCustomerID(){
        return customerID;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getGender() {
        return gender;
    }

    public String getNic() {
        return nic;
    }

    public String getContactNo() {
        return contactNo;
    }
}
