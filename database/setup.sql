-- Create truths table
CREATE TABLE IF NOT EXISTS truths (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create dares table
CREATE TABLE IF NOT EXISTS dares (
    id SERIAL PRIMARY KEY,
    file_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create storage bucket for dare images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('dares', 'dares', true)
ON CONFLICT (id) DO NOTHING;

-- Enable Row Level Security
ALTER TABLE truths ENABLE ROW LEVEL SECURITY;
ALTER TABLE dares ENABLE ROW LEVEL SECURITY;

-- Create policies for truths table
CREATE POLICY "Allow public read access to truths" ON truths
    FOR SELECT USING (true);

CREATE POLICY "Allow public insert access to truths" ON truths
    FOR INSERT WITH CHECK (true);

-- Create policies for dares table
CREATE POLICY "Allow public read access to dares" ON dares
    FOR SELECT USING (true);

CREATE POLICY "Allow public insert access to dares" ON dares
    FOR INSERT WITH CHECK (true);

-- Create storage policies
CREATE POLICY "Public Access" ON storage.objects
    FOR SELECT USING (bucket_id = 'dares');

CREATE POLICY "Authenticated users can upload" ON storage.objects
    FOR INSERT WITH CHECK (bucket_id = 'dares');

-- Insert some sample data (optional - the game will generate random questions)
-- The truths and dares are now stored in the JavaScript configuration

-- Sample dare data (optional - the game will generate random dares)
-- The truths and dares are now stored in the JavaScript configuration
