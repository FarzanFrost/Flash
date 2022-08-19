package com.example.flashbackend.DAO;

import com.example.flashbackend.Entity.Event;
import org.springframework.data.repository.CrudRepository;

import java.math.BigInteger;

public interface EventRepository extends CrudRepository<Event, BigInteger> {
}
