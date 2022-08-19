package com.example.flashbackend.DAO;

import com.example.flashbackend.Entity.Package;
import org.springframework.data.repository.CrudRepository;

import java.math.BigInteger;

public interface PackageRepository extends CrudRepository<Package , BigInteger> {
}
