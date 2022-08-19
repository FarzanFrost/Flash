package com.example.flashbackend.DAO;

import com.example.flashbackend.Entity.Portfolio;
import org.springframework.data.repository.CrudRepository;

import java.math.BigInteger;

public interface PortfolioRepository extends CrudRepository< Portfolio , BigInteger> {
}
