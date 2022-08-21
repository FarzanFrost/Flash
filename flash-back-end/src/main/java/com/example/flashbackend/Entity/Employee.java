package com.example.flashbackend.Entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.math.BigInteger;
import java.util.List;

@Entity
//@JsonIdentityInfo( generator = ObjectIdGenerators.PropertyGenerator.class,property = "employeeID")
public class Employee {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    private BigInteger EmployeeID;

    private String FirstName;

    private String LastName;

    private String Gender;

    private String Type;

    private long ProfilePic;

    private String NIC;

    private String ContactNo;

    private String Address;

    @OneToOne( mappedBy = "employee" )
    private Login login;

    @OneToMany( mappedBy = "employee" )
    private List<Attendance> attendances;

    @ManyToMany
    @JoinTable( name = "EventRelationship" , joinColumns = @JoinColumn( name = "EmployeeID") , inverseJoinColumns = @JoinColumn( name = "EventID" ))
    @JsonIgnore
    private List<Event> events;

    public Employee(){}

    public Employee(String firstName, String lastName, String gender, String type, long profilePic, String NIC, String contactNo, String address) {
        FirstName = firstName;
        LastName = lastName;
        Gender = gender;
        Type = type;
        ProfilePic = profilePic;
        this.NIC = NIC;
        ContactNo = contactNo;
        Address = address;
    }

    public BigInteger getEmployeeID() {
        return EmployeeID;
    }

    public void setEmployeeID(BigInteger employeeID) {
        EmployeeID = employeeID;
    }

    public String getFirstName() {
        return FirstName;
    }

    public void setFirstName(String firstName) {
        FirstName = firstName;
    }

    public String getLastName() {
        return LastName;
    }

    public void setLastName(String lastName) {
        LastName = lastName;
    }

    public String getGender() {
        return Gender;
    }

    public void setGender(String gender) {
        Gender = gender;
    }

    public String getType() {
        return Type;
    }

    public void setType(String type) {
        Type = type;
    }

    public long getProfilePic() {
        return ProfilePic;
    }

    public void setProfilePic(long profilePic) {
        ProfilePic = profilePic;
    }

    public String getNIC() {
        return NIC;
    }

    public void setNIC(String NIC) {
        this.NIC = NIC;
    }

    public String getContactNo() {
        return ContactNo;
    }

    public void setContactNo(String contactNo) {
        ContactNo = contactNo;
    }

    public String getAddress() {
        return Address;
    }

    public void setAddress(String address) {
        Address = address;
    }

    public Login getLogin() {
        return login;
    }

    public void setLogin(Login login) {
        this.login = login;
    }

    public List<Attendance> getAttendances() {
        return attendances;
    }

    public void setAttendances(List<Attendance> attendances) {
        this.attendances = attendances;
    }

    public List<Event> getEvents() {
        return events;
    }

    public void setEvents(List<Event> events) {
        this.events = events;
    }
}
