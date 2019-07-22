package com.greenbooks.models;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.ResultSet;
import com.greenbooks.models.Order;

@RestController
@RequestMapping({ "/api/orders" })

public class OrdersController {

   @GetMapping()
	    public List<Order> getAllActors() {
	        List<Order> orders = new ArrayList<Order>();
	        // Code to query the database and
	        // add actors to the List will go here
	        
	        Connection con;
	        try {
	        	con = DriverManager.getConnection("jdbc:mysql://localhost:3306/greenBooks", "root", "Password1!");
	        	Statement stmt = con.createStatement();
	        	ResultSet rs = stmt.executeQuery("SELECT orders.order_ID, orders.user_ID,  concat(customers.first_name, \" \", customers.last_name) as customer_name, order_date as service_date, orders.mow_trim, orders.cu, orders.pw, orders.r, orders.lr, orders.misc, orders.order_total, orders.payment_method as payment_type, orders.payment_status from orders INNER JOIN customers USING(user_ID);");
	        	while (rs.next()) {

	        	    // create a new Actor object
	        	    Order newOrder = new Order();

	        	    // get the values from each column of the current row and add them to the new Actor
	        	    newOrder.setOrder_ID(rs.getString("order_ID"));
	        	    newOrder.setUser_ID(rs.getString("user_ID"));
	        	    newOrder.setCustomer_name(rs.getString("customer_name"));
	        	    newOrder.setService_date(rs.getString("service_date"));
	        	    newOrder.setMow_trim(rs.getString("mow_trim"));
	        	    newOrder.setCu(rs.getString("cu"));
	        	    newOrder.setPw(rs.getString("pw"));
	        	    newOrder.setR(rs.getString("r"));
	        	    newOrder.setLr(rs.getString("lr"));
	        	    newOrder.setMisc(rs.getString("misc"));
	        	    newOrder.setOrder_total(rs.getString("order_total"));
	        	    newOrder.setPayment_type(rs.getString("payment_type"));
	        	    newOrder.setPayment_status(rs.getString("payment_status"));

	        	    // add the new actor to the actors list
	        	    orders.add(newOrder);
	        	}
	        } catch (SQLException e) {
	        	e.printStackTrace();
	        }
	        
	    //    model.addAttribute("orders", orders);
	        return orders;
	    }
	}
