package com.example.flashbackend.Component;

import com.example.flashbackend.DAO.*;
import com.example.flashbackend.DTO.*;
import com.example.flashbackend.Entity.*;
import com.example.flashbackend.Entity.Package;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.math.BigInteger;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@Component
public class CustomerComponent {
    @Autowired
    EventRepository eventRepository;

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    PackageRepository PackageRepository;

    @Autowired
    ReviewsRepository ReviewsRepository;

    @Autowired
    FolderRepository folderRepository;

    @Autowired
    EmployeeRepository employeeRepository;

    public List<Customer> getCustomer(){
        return customerRepository.findAll();
    }

    public List<Event> getEvents(){
        return eventRepository.findAll();

    }

    public List<Package> getPackages(){
        return PackageRepository.findAll();
    }

    public List<Reviews> getReviews(){
        return ReviewsRepository.findAll();
    }

    public String addNewEvent( AddEvent addEvent ){
        eventRepository.insertEvent( addEvent.getStatus(), addEvent.getAdvanceAmount(), addEvent.getEventDate(), addEvent.getStartTime(), addEvent.getEndTime(), addEvent.getAddress(), addEvent.getLatitude(), addEvent.getLongitude(), addEvent.getExtraPage(), addEvent.getCategory(), addEvent.getDelivered(), addEvent.getCustomerId(), addEvent.getPackageId() );

        List<Event> events = eventRepository.findAll();

        BigInteger eventId = null;

        Random random = new Random();

        for (int i = 0; i < events.size(); i++) {

            if ( events.get(i).getFolders().size() == 0 && events.get(i).getEmployees().size() == 0 ){

                eventId = events.get(i).getEventID();
                System.out.println( eventId );

            }

        }

        if ( eventId != null ){

            createFolders( eventId , "Family" );
            createFolders( eventId , "Friends" );
            createFolders( eventId , "Social Media" );

            List<Employee> employees = employeeRepository.findAll();

            List<Employee> employees1 = new ArrayList<>();

            for (int i = 0; i < employees.size(); i++) {

                if (  employees.get(i).getType() == "manager" || employees.get(i).getType() == "admin"  ){

                    System.out.println("manager or admin");

                }else{

                    employees1.add( employees.get(i) );

                }

            }

            if ( employees1.size() != 0 ){

                int random1 = random.nextInt( employees1.size() );
                int random2 = random.nextInt( employees1.size() );
                int random3 = random.nextInt( employees1.size() );


                Optional<Event> event = eventRepository.findById( eventId );
                if ( event.isPresent() ){

                    List<Employee> employees2 = event.get().getEmployees();
                    employees2.add( employees1.get( random1 ) );
                    employees2.add( employees1.get( random2 ) );
                    employees2.add( employees1.get( random3 ) );

                    event.get().setEmployees( employees2 );

                    eventRepository.save( event.get() );

                }

            }

        }

        return "done";
    }

    public String updateEvent( EditEvent editEvent){
        eventRepository.updateEvent( editEvent.getEventID(), editEvent.getStatus(), editEvent.getAdvancedAmount(), editEvent.getEventDate(), editEvent.getStartTime(), editEvent.getEndTime(), editEvent.getAddress(), editEvent.getLatitude(), editEvent.getLongitude(), editEvent.getExtraPage(), editEvent.getCategory(), editEvent.getDelivered(), editEvent.getCustomerId(), editEvent.getPackageId());
        return "done";
    }

    public String addBankDetail( AddBankDetail addBankDetail){
       customerRepository.updateBank( addBankDetail.getCardNo(), addBankDetail.getCVCNo(), addBankDetail.getExpiaryDate(), addBankDetail.getCardType() );
       return "done";
    }

    public String UpdateCustomer( EditCustomer editCustomer){
        customerRepository.updateCustomer( editCustomer.getCustomerID(), editCustomer.getFirstName(), editCustomer.getLastName(), editCustomer.getGender(), editCustomer.getNic(), editCustomer.getContactNo() );
        return "done";
    }

    public String addReview(Reviews reviews){
        ReviewsRepository.save( reviews );
        return "done";
    }

    public String deleteCustomer(BigInteger customerId ){

        customerRepository.deleteById( customerId );
        return "done";
    }

    public String deleteReview(BigInteger reviewId ){

        ReviewsRepository.deleteById( reviewId );
        return "done";
    }

//    public String deleteEvent( BigInteger eventId ){
//
//        eventRepository.deleteById( eventId );
//        return "done";
//
//    }

    public String createFolders( BigInteger eventId , String folderName ){

        folderRepository.insertFolder( eventId , folderName );
        return "done";

    }

    public List<Folder> getFolders( BigInteger eventId ){

        return folderRepository.findByEventId( eventId );

    }

}
