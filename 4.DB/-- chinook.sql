-- chinook 숙제

-- [1]
-- non_usa_customers.sql: 
-- 미국에 거주하지 않는 고객 전체 이름, 고객 ID, 국가을 표시하는 쿼리를 제공합니다.
-- 풀이 : 
-- SELECT FirstName || " " || LastName AS FullName, CustomerId, Country 
-- FROM Customers WHERE 
-- Country != 'USA'; 

-- 답 : 
-- SELECT FirstName||" "||LastName AS "Full Name", CustomerId, Country 
-- FROM customers WHERE 
-- country != "USA";

-- [2]
-- 브라질 고객만 표시하는 쿼리를 제공합니다.
-- 풀이 :
-- SELECT FirstName || " " || LastName AS "Customers From Brazil" 
-- FROM customers
-- WHERE Country="Brazil";

-- 답 : 
-- SELECT FirstName||" "||LastName AS "Customers From Brazil" 
-- FROM customers 
-- WHERE country = "Brazil";

-- [3]
-- 브라질 고객의 송장(invoice)을 보여주는 쿼리를 제공합니다. 
-- 결과 테이블에는 고객의 전체 이름, 송장 ID, 송장 날짜 및 청구 국가가 표시되어야 합니다. 
-- 풀이 :
-- SELECT 
-- c.FirstName||" "||c.LastName AS "Customers", 
-- i.invoiceId, 
-- i.invoiceDate, 
-- i.BillingCountry 
-- FROM customers c
-- JOIN invoices i
-- ON c.customerId = i.customerId 
-- WHERE c.Country='Brazil';

-- 답 : 
-- SELECT 
-- c.FirstName||" "||c.LastName AS "Customers", 
-- i.InvoiceId, 
-- i.InvoiceDate, 
-- i.BillingCountry 
-- FROM customers c 
-- LEFT JOIN invoices i 
-- ON i.CustomerId = c.CustomerId 
-- WHERE c.Country = "Brazil";

-- 단어 줄이기
-- SELECT 
-- c.FirstName||" "||c.LastName AS FullName, 
-- i.invoiceId, 
-- i.invoiceDate, 
-- i.BillingCountry
-- FROM customers c 
-- JOIN invoices i ON c.customerId = i.customerId 
-- WHERE c.Country='Brazil';

-- 백업한거 불러오기
-- sqlite3 db명 < aaa.sql

-- [4]
-- sales_agents.sql: 
-- 판매 대리인인 직원만 표시하는 쿼리를 제공하십시오.
-- 풀이 : 
-- SELECT 
-- FirstName||" "||LastName AS "Sales Agent"
-- FROM employees
-- WHERE Title LIKE 'Sales%';

-- 답 : 
-- SELECT 
-- FirstName||" "||LastName AS "Sales Employee" 
-- FROM employees 
-- WHERE employees.Title LIKE "Sales%";

-- [5]
-- unique_invoice_countries.sql: 
-- 송장 테이블에서 청구 국가의 고유(unique)/고유(distinct) 목록을 표시하는 쿼리를 제공합니다.
-- 송장 테이블에서 고유한/중복되지 않은 청구 국가 목록을 보여주는 쿼리를 제공하십시오.
-- 풀이 : 
-- SELECT
-- DISTINCT BillingCountry
-- FROM invoices;

-- SELECT COUNT(*) FROM invoices;

-- [6]
-- sales_agent_invoices.sql: 
-- 각 판매 에이전트와 연결된 송장을 표시하는 쿼리를 제공합니다. 
-- 결과 테이블에는 영업 에이전트의 전체 이름이 포함되어야 합니다.
-- 풀이 : 
-- SELECT 
-- e.FirstName||" "||e.LastName AS "SalesAgentName",
-- i.InvoiceId,
-- i.InvoiceDate,
-- i.BillingCountry
-- FROM employees e
-- JOIN customers c ON e.EmployeeId = c.SupportRepId
-- JOIN invoices i ON c.CustomerId = i.CustomerId
-- WHERE e.Title = 'Sales Support Agent';

-- [7]
-- invoice_totals.sql: 
-- 모든 송장 및 고객에 대한 
-- 송장 총액, 
-- 고객 이름, 
-- 국가 및 판매 대리인 이름
-- 을 표시하는 쿼리를 제공합니다.
-- 풀이 : 
-- SELECT 
-- c.FirstName||" "||c.LastName AS "CustomerName",
-- i.BillingCountry,
-- e.FirstName||" "||e.LastName AS "AgentName",
-- SUM(i.Total)
-- FROM invoices i
-- JOIN customers c ON i.CustomerId = c.CustomerId
-- JOIN employees e ON c.SupportRepId = e.EmployeeId
-- GROUP BY "CustomerName";

-- 답 : 
-- invoice_totals.sql :
-- SELECT  
-- c.FirstName||" "||c.LastName AS "Customer", 
-- i.BillingCountry, 
-- e.FirstName||" "||e.LastName as "Sale Agent", 
-- i.Total 
-- FROM Invoices i 
-- JOIN Customers c ON c.CustomerId = i.CustomerId 
-- JOIN Employees e ON e.EmployeeId = c.SupportRepId;

-- [8]
-- total_invoices_{year}.sql: 
-- 2009년과 2011년에 몇 개의 인보이스가 있었습니까?

-- SELECT COUNT(*) FROM invoices WHERE InvoiceDate LIKE '2009%';
-- SELECT COUNT(*) FROM invoices WHERE InvoiceDate LIKE '2011%';

-- SELECT 
-- COUNT(i.InvoiceId), strftime('%Y', i.InvoiceDate) AS Year
-- FROM invoices i 
-- WHERE Year IN ('2009', '2011')
-- GROUP BY Year;

-- 답 : 
-- total_invoices_{year}.sql :
-- SELECT COUNT(*) FROM invoices 
-- WHERE InvoiceDate BETWEEN "2009-01-01" AND "2009-12-31" 
-- OR InvoiceDate BETWEEN "2011-01-01" AND "2011-12-31";

-- SELECT 
-- COUNT(i.InvoiceId) AS NumberOfInvoices, 
-- strftime('%Y', i.InvoiceDate) AS InvoiceYear 
-- FROM Invoices i 
-- WHERE InvoiceYear IN ('2009', '2010', '2011') 
-- GROUP BY InvoiceYear;

-- [9]
-- total_sales_{year}.sql: 
-- 각 연도의 총 매출은 얼마입니까?
-- 풀이 : 
-- SELECT 
-- strftime('%Y', InvoiceDate) AS invoiceYear,
-- SUM(Total)
-- FROM invoices
-- GROUP BY invoiceYear;

-- [10] invoice_37_line_item_count.sql: 
-- Invoice_Items 테이블을 보고 Invoice ID 37에 대한 라인 항목 수를 계산하는 쿼리를 제공합니다.
-- Invoice ID 37에 대한 라인 항목 수를 세는 쿼리를 제공하십시오.
-- 풀이 : 
-- SELECT 
-- COUNT(*)
-- FROM invoice_items
-- WHERE InvoiceId='37';

-- [11]
-- line_items_per_invoice.sql: 
-- InvoiceLine 테이블을 보고 각 Invoice에 대한 라인 항목 수를 계산하는 쿼리를 제공합니다. 
-- 힌트: 그룹화 기준

-- 풀이: 
-- SELECT 
-- InvoiceId AS InvoiceId,
-- COUNT(*) AS "Invoice Line Count"
-- FROM invoice_items
-- GROUP BY InvoiceId;

-- [12]
-- line_item_track.sql: 
-- 각 송장 라인 항목에 구매한 트랙 이름을 포함하는 쿼리를 제공합니다.
-- 풀이 : 
-- SELECT 
-- ii.InvoiceId, 
-- t.Name
-- FROM invoice_items ii
-- JOIN tracks t
-- ON ii.TrackId = t.TrackId;

-- [13]
-- line_item_track_artist.sql: 
-- 각 송장 라인 항목과 함께 구매된 트랙 이름 및 아티스트 이름을 포함하는 쿼리를 제공하십시오.
-- 구매한 트랙 이름(tracks.Name)과 아티스트 이름(artists.Name  )을 포함하는 쿼리를 각 송장 라인 항목과 함께 제공합니다.
                    
-- 풀이 : 
-- SELECT
-- ii.InvoiceLineId,
-- tr.Name AS TrackName, 
-- ar.Name AS ArtistName
-- FROM invoice_items ii
-- JOIN tracks tr ON ii.TrackId = tr.TrackId
-- JOIN albums al ON tr.AlbumId = al.AlbumId
-- JOIN artists ar ON al.ArtistId = ar.ArtistId
-- ORDER BY InvoiceLineId ASC;

-- SELECT
-- ii.InvoiceId,
-- tr.Name AS TrackName, 
-- ar.Name AS ArtistName
-- FROM invoice_items ii
-- JOIN tracks tr ON ii.TrackId = tr.TrackId
-- JOIN albums al ON tr.AlbumId = al.AlbumId
-- JOIN artists ar ON al.ArtistId = ar.ArtistId;

-- ORDER BY InvoiceLineId ASC;

-- [14]
-- country_invoices.sql: 
-- 국가별 송장 수를 표시하는 쿼리를 제공합니다. 
-- 힌트 : 그룹화 기준
-- 풀이 : 
-- SELECT 
-- c.Country,
-- COUNT(*) AS InvoiceCount
-- FROM invoices i
-- JOIN customers c  
-- ON i.CustomerId = c.CustomerId 
-- GROUP BY c.Country;

-- GPT : 
-- SELECT
--     c.Country,
--     COUNT(i.InvoiceId) AS InvoiceCount
-- FROM
--     invoices i
-- JOIN
--     customers c ON i.CustomerId = c.CustomerId
-- GROUP BY
--     c.Country;

-- [15]
-- playlists_track_count.sql: 
-- 각 재생 목록의 총 트랙 수를 표시하는 쿼리를 제공합니다. /
-- 재생 목록 이름(Playlists.Name)은 결과 테이블에 포함되어야 합니다.
-- 풀이 : 
-- SELECT 
-- p.Name AS PlaylistName,
-- COUNT(pt.TrackId) AS TrackCount
-- FROM playlists p
-- JOIN playlist_track pt
-- ON p.PlaylistId = pt.PlaylistId
-- GROUP BY p.Name;

-- [16]
-- Tracks_no_id.sql: 
-- 모든 트랙을 표시하지만 ID는 표시하지 않는 쿼리를 제공합니다. 
-- 결과에는 앨범 이름(a.TItle), 미디어 유형( m.Name) 및 장르가 포함되어야 합니다.
                  
-- 풀이 : 
-- SELECT 
-- t.Name AS TrackName,
-- a.Title AS AlbumTitle,
-- m.Name AS MediaType,
-- g.Name AS Genre
-- FROM tracks t
-- JOIN albums a ON t.AlbumId = a.AlbumId
-- JOIN media_types m ON t.MediaTypeId = m.MediatypeId
-- JOIN genres g ON t.GenreId = g.GenreId
-- GROUP BY TrackName;

-- [17]
-- invoices_line_item_count.sql: 
-- 모든 송장을 표시하지만 송장 라인 항목의 수를 포함하는 쿼리를 제공합니다.
-- 풀이 : 
-- SELECT 
-- i.InvoiceId AS InvoiceIdNumber,
-- COUNT(ii.InvoiceLineId)
-- FROM invoices i 
-- JOIN invoice_items ii ON i.InvoiceId = ii.InvoiceId
-- GROUP BY InvoiceIdNumber;

-- SELECT 
-- i.InvoiceId AS InvoiceId,
-- COUNT(ii.InvoiceLineId)
-- FROM invoices i 
-- JOIN invoice_items ii ON i.InvoiceId = ii.InvoiceId
-- GROUP BY i.InvoiceId;

-- [18]
-- sales_agent_total_sales.sql: 
-- 판매 대리자별 총 매출을 조회하는 쿼리를 제공한다.
-- 풀이 : 
-- SELECT 
-- e.FirstName||" "||e.LastName as SaleAgent, 
-- SUM(i.Total)
-- FROM employees e
-- JOIN customers c ON e.EmployeeId = c.SupportRepId
-- JOIN invoices i ON c.CustomerId = i.CustomerId
-- GROUP BY SaleAgent;

-- [19]
-- top_2009_agent.sql: 
-- 2009년 가장 많은 매출을 올린 판매원은?
-- 힌트 : 하위 쿼리에서 MAX 함수를 사용하십시오. 
-- 풀이 : 
-- SELECT 
-- e.FirstName||" "||e.LastName AS SaleAgent, 
-- SUM(i.Total) AS TotalSales
-- FROM employees e
-- JOIN customers c ON e.EmployeeId = c.SupportRepId
-- JOIN invoices i ON c.CustomerId = i.CustomerId		
-- WHERE strftime('%Y', i.InvoiceDate) = '2009'
-- GROUP BY SaleAgent
-- ORDER BY TotalSales DESC;
-- LIMIT 1;

-- [20]
-- top_agent.sql: 
-- 전체 판매 실적이 가장 많은 판매 대리인은?
-- 풀이 : 
-- SELECT 
-- e.FirstName||" "||e.LastName AS SaleAgent, 
-- SUM(i.Total) AS TotalSales
-- FROM employees e
-- JOIN customers c ON e.EmployeeId = c.SupportRepId
-- JOIN invoices i ON c.CustomerId = i.CustomerId
-- GROUP BY SaleAgent
-- ORDER BY TotalSales DESC;
-- LIMIT 1;

-- [21]
-- sales_agent_customer_count.sql: 
-- 각 판매 대리인에 할당된 고객 수를 보여주는 쿼리를 제공한다.
-- 풀이 : 
-- SELECT
-- e.EmployeeId,
-- e.FirstName||" "||e.LastName AS SaleAgent, 
-- COUNT(c.CustomerId) AS CustomersCount 
-- FROM employees e 
-- JOIN customers c ON e.EmployeeId = c.SupportRepId
-- GROUP BY e.EmployeeId, SaleAgent
-- ORDER BY CustomersCount DESC;

-- [22]
-- sales_per_country.sql: 
-- 국가별 총 매출을 보여주는 쿼리를 제공한다.
-- 풀이 : 
-- SELECT 
-- c.Country AS Country,
-- SUM(i.Total) AS TotalSales
-- FROM customers c
-- JOIN invoices i ON c.CustomerId = i.CustomerId
-- GROUP BY Country
-- ORDER BY TotalSales DESC;

-- GPT :
-- SELECT
--     i.BillingCountry AS Country,
--     SUM(i.Total) AS TotalSales
-- FROM
--     invoices i
-- JOIN
--     customers c ON i.CustomerId = c.CustomerId
-- GROUP BY
--     Country
-- ORDER BY
--     TotalSales DESC;

-- [23]
-- top_country.sql: 
-- 어느 나라의 고객이 가장 많이 지출했는지를 보여주는 쿼리를 제공하십시오.
-- 풀이 : 
-- SELECT 
-- c.Country AS Country,
-- SUM(i.Total) AS TotalSales
-- FROM customers c
-- JOIN invoices i ON c.CustomerId = i.CustomerId
-- GROUP BY Country
-- ORDER BY TotalSales DESC
-- LIMIT 1;

-- GPT :
-- SELECT
--     i.BillingCountry AS Country,
--     SUM(i.Total) AS TotalSpent
-- FROM
--     invoices i
-- JOIN
--     customers c ON i.CustomerId = c.CustomerId
-- GROUP BY
--     Country
-- ORDER BY
--     TotalSpent DESC
-- LIMIT 1;

-- 답 : 서브쿼리
-- top_country.sql :
-- SELECT
-- "Country", 
-- MAX("Total Sales For Country") as "Total Spent" 
-- FROM 
-- (SELECT BillingCountry as "Country" , 
-- SUM(Total) as "Total Sales For Country" 
-- FROM invoices GROUP BY BillingCountry);

-- SELECT
-- Country, 
-- MAX("Total Sales For Country") as "Total Spent" 
-- FROM 
-- (SELECT BillingCountry as "Country" , 
-- SUM(Total) as "Total Sales For Country" 
-- FROM invoices 
-- GROUP BY BillingCountry);


-- [24]
-- top_2013_track.sql: 
-- 2013년 가장 많이 구매한 트랙을 보여주는 쿼리를 제공합니다.
-- 풀이 : 
-- SELECT
-- t.Name AS TrackName,
-- COUNT(ii.InvoiceId) AS TrackSalesCount
-- FROM tracks t
-- JOIN invoice_items ii ON t.TrackId = ii.TrackId
-- JOIN invoices i ON ii.InvoiceId = i.InvoiceId
-- WHERE strftime('%Y', i.InvoiceDate) = '2013'
-- GROUP BY TrackName
-- ORDER BY TrackSalesCount DESC
-- LIMIT 1;

-- GPT :
-- SELECT
--     t.Name AS TrackName,
--     COUNT(il.InvoiceLineId) AS Purchases
-- FROM
--     invoices i
-- JOIN
--     invoice_items il ON i.InvoiceId = il.InvoiceId
-- JOIN
--     tracks t ON il.TrackId = t.TrackId
-- WHERE
--     strftime('%Y', i.InvoiceDate) = '2013'
-- GROUP BY
--     TrackName
-- ORDER BY
--     Purchases DESC
-- LIMIT 1;

-- [25]
-- top_5_tracks.sql: 
-- 가장 많이 구매한 상위 5곡을 보여주는 쿼리를 제공합니다.
-- 풀이 : 
-- SELECT
-- t.Name AS TrackName,
-- COUNT(i.InvoiceId) AS TrackSalesCount
-- FROM tracks t
-- JOIN invoice_items ii ON t.TrackId = ii.TrackId
-- JOIN invoices i ON ii.InvoiceId = i.InvoiceId
-- GROUP BY TrackName
-- ORDER BY TrackSalesCount DESC
-- LIMIT 5;

-- GPT :
-- SELECT
--     t.Name AS TrackName,
--     COUNT(il.InvoiceLineId) AS Purchases
-- FROM
--     invoice_items il
-- JOIN
--     tracks t ON il.TrackId = t.TrackId
-- GROUP BY
--     TrackName
-- ORDER BY
--     Purchases DESC
-- LIMIT 5;

-- 답 : 
-- top_5_tracks.sql :
-- SELECT 
-- t.Name, 
-- count(t.Name) AS "PurchaseCount" 
-- FROM tracks t 
-- JOIN invoice_items l ON l.TrackId =t.Trackid 
-- GROUP BY t.Name 
-- ORDER BY PurchaseCount DESC 
-- LIMIT 5;

-- [26]
-- top_3_artists.sql: 
-- 가장 많이 팔린 3명의 아티스트를 보여주는 쿼리를 제공합니다.
-- 풀이 : 
-- SELECT
-- ar.Name AS ArtistName,
-- COUNT(ii.InvoiceId) AS TrackSalesCount
-- FROM artists ar 
-- JOIN albums al ON ar.ArtistId = al.ArtistId
-- JOIN tracks tr ON al.AlbumId = tr.AlbumId
-- JOIN invoice_items ii ON tr.TrackId = ii.TrackId
-- GROUP BY ArtistName
-- ORDER BY TrackSalesCount DESC
-- LIMIT 3;

-- GPT :
-- SELECT
--     ar.Name AS ArtistName,
--     SUM(il.Quantity) AS TotalSales
-- FROM
--     invoice_items il
-- JOIN
--     tracks t ON il.TrackId = t.TrackId
-- JOIN
--     albums al ON t.AlbumId = al.AlbumId
-- JOIN
--     artists ar ON al.ArtistId = ar.ArtistId
-- GROUP BY
--     ArtistName
-- ORDER BY
--     TotalSales DESC
-- LIMIT 3;

-- 답 : 
-- top_3_artists.sql :
-- SELECT 
-- "Artist Name", 
-- "Total Earned" 
-- FROM 
-- (SELECT 
-- ar.Name as "Artist Name", 
-- SUM(t.UnitPrice) as "Total earned" 
-- FROM tracks t 
-- JOIN albums a ON t.AlbumId = a.AlbumId
-- JOIN artists ar ON a.ArtistId = ar.ArtistId 
-- GROUP BY ar.Name) 
-- ORDER BY "Total Earned" DESC 
-- LIMIT 3;

-- [27]
-- top_media_type.sql: 
-- 가장 많이 구매한 Media Type을 보여주는 쿼리를 제공한다.
-- 풀이 : 

-- 금액
-- SELECT
-- mt.Name AS MediaType,
-- SUM(tr.UnitPrice) AS PriceSum
-- FROM media_types mt
-- JOIN tracks tr ON mt.MediaTypeId = tr.MediaTypeId
-- GROUP BY MediaType
-- ORDER BY PriceSum DESC
-- LIMIT 1;

-- 갯수 
-- SELECT
-- mt.Name AS MediaType,
-- COUNT(ii.InvoiceId) AS SalesCount
-- FROM media_types mt
-- JOIN tracks tr ON mt.MediaTypeId = tr.MediaTypeId
-- JOIN invoice_items ii ON tr.TrackId = ii.TrackId
-- GROUP BY MediaType
-- ORDER BY SalesCount DESC
-- LIMIT 1;