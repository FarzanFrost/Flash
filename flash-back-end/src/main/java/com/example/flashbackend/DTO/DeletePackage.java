package com.example.flashbackend.DTO;

import java.math.BigInteger;

public class DeletePackage {

    private BigInteger packageID;

    public DeletePackage(BigInteger packageID) {
        this.packageID = packageID;
    }

    public DeletePackage() {
    }

    public BigInteger getPackageID() {
        return packageID;
    }
}
