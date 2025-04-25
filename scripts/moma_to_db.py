import pandas as pd

df = pd.read_json('MomaArtworks.json')

# downloaded from https://github.com/MuseumofModernArt/collection/blob/master/Artworks.json

# print distinct values of classification column
print(df['Classification'].unique())

# drop everything where imageurl column is null
df = df[df['ImageURL'].notna()]

# filter classifications to Painting, Print or Photograph
df = df[df['Classification'].isin(['Painting', 'Print', 'Photograph', 'Drawing', 'Poster', 'Sculpture'])]

# create a new dataframe with the mapped columns
df = df[['ObjectID', 'Title', 'Artist', 'Date', 'Nationality', 'ImageURL']]

# filter to those with a single artist (list is length 1)
df = df[df['Artist'].apply(len) == 1]

# filter to those with non-null date
df = df[df['Date'].notna()]

# filter to those where the date is a string of a number e.g. "1900"
df = df[df['Date'].str.isdigit()]

# change date column to int
df['Date'] = df['Date'].astype(int)

# change artist column to string
df['Artist'] = df['Artist'].apply(lambda l: l[0])

# filter to artists with more than 10 artworks
df = df.groupby('Artist').filter(lambda x: len(x) > 10)

# sort by artist and year
df = df.sort_values(by=['Artist', 'Date'])

# rename the columns to the following:
# id, title, artist, imageUrl, style, year, country, city, genreTags, themeTags
df.rename(columns={
  'ObjectID': 'id',
  'Title': 'title',
  'Artist': 'artist',
  'Date': 'year',
  'Nationality': 'country',
  'ImageURL': 'imageUrl'
  }, inplace=True)

# add column style with null as every value
df['style'] = None

# add column city with null as every value
df['city'] = None

# add column genreTags with empty list as every value
df['genreTags'] = [[] for _ in range(len(df))]

# add column themeTags with empty list as every value
df['themeTags'] = [[] for _ in range(len(df))]

print(df.shape)
print(df.head())
print(df.columns)

# save as pretty printed json
df.to_json('artworks_db_v2.json', orient='records', indent=2)
