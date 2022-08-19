package com.example.flashbackend.DAO;

import org.springframework.data.repository.CrudRepository;

import java.math.BigInteger;

public interface Customer extends CrudRepository< Customer , BigInteger > {
}
