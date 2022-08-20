package com.example.flashbackend.Entity;

import java.io.Serializable;
import java.math.BigInteger;
import java.sql.Date;

public class AttendanceCompositeKey implements Serializable {


    private BigInteger EmployeeID;

    private Date Date;

}
