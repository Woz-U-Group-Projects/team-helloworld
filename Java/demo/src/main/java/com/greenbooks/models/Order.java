package com.greenbooks.models;

public class Order {

	private String order_ID;
	private String service_date;
	private String mow_trim;
	private String cu;
	private String pw;
	private String r;
	private String lr;
	private String misc;
	private String customer_name;
	private String user_ID;
	private String payment_status;
	private String payment_type;
	private String order_total;
	private String amount_paid;
	private String amount_due;
	
	public String getMow_trim() {
		return mow_trim;
	}
	public void setMow_trim(String mow_trim) {
		this.mow_trim = mow_trim;
	}
	public String getCu() {
		return cu;
	}
	public void setCu(String cu) {
		this.cu = cu;
	}
	public String getPw() {
		return pw;
	}
	public void setPw(String pw) {
		this.pw = pw;
	}
	public String getR() {
		return r;
	}
	public void setR(String r) {
		this.r = r;
	}
	public String getLr() {
		return lr;
	}
	public void setLr(String lr) {
		this.lr = lr;
	}
	public String getMisc() {
		return misc;
	}
	public void setMisc(String misc) {
		this.misc = misc;
	}
	
	public String getOrder_ID() {
		return order_ID;
	}
	public void setOrder_ID(String order_ID) {
		this.order_ID = order_ID;
	}
	public String getService_date() {
		return service_date;
	}
	public void setService_date(String service_date) {
		this.service_date = service_date;
	}
	public String getCustomer_name() {
		return customer_name;
	}
	public void setCustomer_name(String customer_name) {
		this.customer_name = customer_name;
	}
	public String getUser_ID() {
		return user_ID;
	}
	public void setUser_ID(String user_ID) {
		this.user_ID = user_ID;
	}
	public String getPayment_status() {
		return payment_status;
	}
	public void setPayment_status(String payment_status) {
		this.payment_status = payment_status;
	}
	public String getPayment_type() {
		return payment_type;
	}
	public void setPayment_type(String payment_type) {
		this.payment_type = payment_type;
	}
	public String getOrder_total() {
		return order_total;
	}
	public void setOrder_total(String order_total) {
		this.order_total = order_total;
	}
	public String getAmount_paid() {
		return amount_paid;
	}
	public void setAmount_paid(String amount_paid) {
		this.amount_paid = amount_paid;
	}
	public String getAmount_due() {
		return amount_due;
	}
	public void setAmount_due(String amount_due) {
		this.amount_due = amount_due;
	}

}
