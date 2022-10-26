package com.example.flashbackend.DTO;

import java.math.BigInteger;

public class DeleteEmployee {

    private BigInteger employeeID;

    public DeleteEmployee(BigInteger employeeID) {
        this.employeeID = employeeID;
    }

    public DeleteEmployee() {
    }

    public BigInteger getEmployeeID() {
        return employeeID;
    }
}
