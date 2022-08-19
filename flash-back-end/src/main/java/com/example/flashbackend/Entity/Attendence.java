package com.example.flashbackend.Entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import java.math.BigInteger;
import java.sql.Date;

@Entity
@IdClass( AttendenceCompositeKey.class )
public class Attendence {

    @Id
    private BigInteger EmployeeID;

    @Id
    private Date Date;

    private String Present;

    public Attendence(){}

    public Attendence(BigInteger employeeID, java.sql.Date date, String present) {
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
