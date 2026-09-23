use std::cmp::Ordering;
use std::collections::BinaryHeap;

#[derive(Copy,Clone)]
struct Edge {
        dst:i32,
        time:i32
}

#[derive(Copy,Clone,Eq,PartialEq)]
struct State {
    dist:i32,
    node:i32
}

impl Ord for State {
    fn cmp(&self, other:&Self) -> Ordering {
        other.dist.cmp(&self.dist).then_with(||self.node.cmp(&other.node))
    }
}

impl PartialOrd for State {
    fn partial_cmp(&self, other:&Self) -> Option<Ordering> {
        Some(self.cmp(other))
    }
}

impl Solution {
    fn build_adjacency_list(times:Vec<Vec<i32>>,n:i32) -> Vec<Vec<Edge>> {
        let mut adj_list:Vec<Vec<Edge>> = vec![vec![];(n+1) as usize];

        for edge in &times {
            if let &[src,dst,time] = &edge[..] {
                adj_list[src as usize].push(Edge{dst,time});
            }
        }
        adj_list
    }

    fn shortest_path(adj_list:Vec<Vec<Edge>>,n:i32, start:i32) -> Vec<i32> {
        let mut distance: Vec<i32> = (0..n+1).map(|_| i32::MAX).collect();
        distance[start as usize] = 0;
        let mut heap = BinaryHeap::new();

        heap.push(State {dist:0, node:start});

        while let Some(State{dist,node}) = heap.pop() {
            if dist > distance[node as usize] {continue;}

            for edge in &adj_list[node as usize] {
                let next = State {dist: dist+edge.time, node: edge.dst };

                if next.dist < distance[next.node as usize] {
                    heap.push(next);
                    distance[next.node as usize] = next.dist;
                }
            }
        }
        distance
    }

    pub fn network_delay_time(times: Vec<Vec<i32>>, n: i32, k: i32) -> i32 {
        let adj_list:Vec<Vec<Edge>> = Self::build_adjacency_list(times, n);
        let shortest_paths:Vec<i32> = Self::shortest_path(adj_list,n,k);

       let mut max_time = -1;
       for node in (1..=n) {
        let d = shortest_paths[node as usize];

        if d == i32::MAX {return -1;};

        if d > max_time {
            max_time = d;
        }
       }
       return max_time;
    }
}

/*
Build the adjacency list from times

let adj_list:Vec<Edge>


struct Edge {
    dst:i32,
    time:i32
}

let adj_list:Vec<Edge> = vec![vec![];(n+1) as usize];

for edge in &times {
    if let [src,dst, time] = &edge {
        vec![src].push(Edge {dst, time})
    }
} 
*/