import sqlite3
from datetime import date, timedelta

sdate = date(2022,1,1)   # start date
edate = date(2032,1,1)   # end date

dates = [sdate+timedelta(days=x) for x in range((edate-sdate).days)]

weekdays=[]
for date in dates:
  if date.weekday() < 5:
    new_date=date.strftime('%Y-%m-%d')
    old_date=date.strftime('%m/%d/%Y')
    weekdays.append([new_date, old_date])

con=sqlite3.connect(r"C:\Users\James\Projects\intuit-app-1\booking-api\bookingdb.db")

cur=con.cursor()
for day,old_day in weekdays:
  cur.execute(f"UPDATE open_appointments SET date='{day}' WHERE date LIKE '%{old_day}%'")

con.commit()