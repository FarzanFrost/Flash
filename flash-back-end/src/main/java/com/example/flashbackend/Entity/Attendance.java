package com.example.flashbackend.Entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.math.BigInteger;
import java.sql.Date;

@Entity
@IdClass( AttendanceCompositeKey.class )
//@JsonIdentityInfo( generator = ObjectIdGenerators.PropertyGenerator.class,property = "employeeID")
public class Attendance {

    @Id
    private BigInteger EmployeeID;

    @Id
    private Date Date;

    private String Present;

//    @ManyToOne
//    @JoinColumn( name = "EmployeeID" )
//    @JsonIgnore
//    private Employee employee;

    public Attendance(){}

    public Attendance(BigInteger employeeID, java.sql.Date date, String present) {
        EmployeeID = employeeID;
        Date = date;
        Present = present;
    }

    public BigInteger getEmployeeID() {
        return EmployeeID;
    }

    public void setEmployeeID(BigInteger employeeID) {
        EmployeeID = employeeID;
    }

    public java.sql.Date getDate() {
        return Date;
    }

    public void setDate(java.sql.Date date) {
        Date = date;
    }

    public String getPresent() {
        return Present;
    }

    public void setPresent(String present) {
        Present = present;
    }

//    public Employee getEmployee() {
//        return employee;
//    }
//
//    public void setEmployee(Employee employee) {
//        this.employee = employee;
//    }
}
