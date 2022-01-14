import sqlite3
from datetime import date, timedelta

sdate = date(2022,1,1)   # start date
edate = date(2032,1,1)   # end date

dates = [sdate+timedelta(days=x) for x in range((edate-sdate).days)]

weekdays=[]
for date in dates:
  if date.weekday() < 5:
    new_date=date.strftime('%Y-%m-%d')
    weekdays.append(new_date)


con=sqlite3.connect(r"C:\Users\James\Projects\sqlite-db\intuitdb.db")

cur=con.cursor()
for day in weekdays:
  values = (day,
    "10:00 - 10:30",
    "11:00 - 11:30",
    "1:00 - 1:30",
    "2:00 - 2:30",
    "3:00 - 3:30",
    "4:00 - 4:30")
  cur.execute(f"INSERT INTO open_appointments(date,time_1,time_2,time_3,time_4,time_5,time_6) VALUES(?,?,?,?,?,?,?)", values)

con.commit()