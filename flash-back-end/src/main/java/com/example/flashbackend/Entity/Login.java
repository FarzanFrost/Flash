package com.example.flashbackend.Entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import java.sql.Timestamp;

@Entity
public class Login {

    @Id
    private String Email;

    private String Password;

    private String Saltkey;

    private Timestamp DateTime;

    @OneToOne
    @JoinColumn( name = "CustomerID" )
    private Customer customer;

    @OneToOne
    @JoinColumn( name = "EmployeeID")
    private Employee employee;

    public Login(){}

    public Login(String email, String password, String saltkey, Timestamp dateTime) {
        Email = email;
        Password = password;
        Saltkey = saltkey;
        DateTime = dateTime;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String password) {
        Password = password;
    }

    public String getSaltkey() {
        return Saltkey;
    }

    public void setSaltkey(String saltkey) {
        Saltkey = saltkey;
    }

    public Timestamp getDateTime() {
        return DateTime;
    }

    public void setDateTime(Timestamp dateTime) {
        DateTime = dateTime;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }
}
