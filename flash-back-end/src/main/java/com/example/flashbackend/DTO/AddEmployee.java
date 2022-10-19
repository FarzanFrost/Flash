package com.example.flashbackend.DTO;

public class AddEmployee {

    private String firstName;

    private String lastName;

    private String gender;

    private String type;

    private long profilePic;

    private String nic;

    private String contactNo;

    private String address;

    private String email;

    private String password;

    public AddEmployee(String firstName, String lastName, String gender, String type, long profilePic, String nic, String contactNo, String address, String email, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.type = type;
        this.profilePic = profilePic;
        this.nic = nic;
        this.contactNo = contactNo;
        this.address = address;
        this.email = email;
        this.password = password;
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

    public String getType() {
        return type;
    }

    public long getProfilePic() {
        return profilePic;
    }

    public String getNic() {
        return nic;
    }

    public String getContactNo() {
        return contactNo;
    }

    public String getAddress() {
        return address;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
}
