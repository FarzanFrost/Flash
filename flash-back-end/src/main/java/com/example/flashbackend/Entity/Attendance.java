package com.example.flashbackend.Entity;

import javax.persistence.*;
import java.math.BigInteger;
import java.sql.Date;

@Entity
@IdClass( AttendanceCompositeKey.class )
public class Attendance {

    @Id
    private BigInteger EmployeeID;

    @Id
    private Date Date;

    private String Present;

    @ManyToOne
    @JoinColumn( name = "EventID" )
    private Employee employee;

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
}
