package com.example.flashbackend.DAO;

import com.example.flashbackend.Entity.Discounts;
import org.springframework.data.repository.CrudRepository;

import java.math.BigInteger;

public interface DiscountsRepository extends CrudRepository<Discounts , BigInteger> {
}
